-- Build your Menu - the menu itself moves into the database
-- Paste into Supabase > SQL Editor > New query > Run. Safe to run more than once.
--
-- Until now the 147 dishes, the package prices and the themes lived inside the
-- app's code, so changing one meant a code change. They live here instead now.
--
-- The customer's page reads this on load. If the read fails for any reason it
-- keeps using the copy built into the page, so a database problem can never
-- take the ordering page down.

-- ------------------------------------------------------------------- dishes

create table if not exists public.menu_items (
  id         bigint generated always as identity primary key,
  name       text    not null,
  cu         text    not null check (cu in ('ch', 'in')),   -- chinese or indian
  cat        text    not null,          -- starter main rice noodle biryani bread dessert
  diet       text,                      -- veg | nonveg | null
  sub        text,                      -- the group it sits under on the page
  note       text,
  sort       integer not null default 0,
  in_stock   boolean not null default true,   -- off for today only
  active     boolean not null default true,   -- off for good
  updated_at timestamptz not null default now(),
  unique (name, cat)
);
create index if not exists menu_items_live_idx on public.menu_items (sort)
  where active and in_stock;

-- ------------------------------ prices, package sizes, themes, custom maths

create table if not exists public.menu_config (
  id         boolean primary key default true check (id),
  data       jsonb   not null,
  updated_at timestamptz not null default now()
);

-- --------------------------------------------------------------- who sees what
-- The website may read the live menu and nothing else. Only an owner may write.

alter table public.menu_items  enable row level security;
alter table public.menu_config enable row level security;

grant select on public.menu_items, public.menu_config to anon, authenticated;
grant insert, update, delete on public.menu_items to authenticated;
grant insert, update on public.menu_config to authenticated;

drop policy if exists menu_items_public   on public.menu_items;
drop policy if exists menu_items_admin    on public.menu_items;
drop policy if exists menu_config_public  on public.menu_config;
drop policy if exists menu_config_admin   on public.menu_config;

-- customers see only what is on and in stock
create policy menu_items_public on public.menu_items
  for select to anon using (active and in_stock);
-- owners see everything, including what is switched off
create policy menu_items_admin on public.menu_items
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy menu_config_public on public.menu_config for select to anon using (true);
create policy menu_config_admin  on public.menu_config
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- keep updated_at honest
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists menu_items_touch on public.menu_items;
create trigger menu_items_touch before update on public.menu_items
  for each row execute function public.touch_updated_at();
drop trigger if exists menu_config_touch on public.menu_config;
create trigger menu_config_touch before update on public.menu_config
  for each row execute function public.touch_updated_at();
insert into public.menu_items (name, cu, cat, diet, sub, note, sort) values
('Vegetable Spring Roll', 'ch', 'starter', 'veg', 'Dim sum', null, 0),
('Vegetable Gyoza', 'ch', 'starter', 'veg', 'Dim sum', null, 1),
('Steamed Wonton Pickle Chilli', 'ch', 'starter', 'veg', 'Dim sum', null, 2),
('Vegetable Basil Dumplings', 'ch', 'starter', 'veg', 'Dim sum', null, 3),
('Edamame Dumpling With Truffle Oil', 'ch', 'starter', 'veg', 'Dim sum', null, 4),
('Vegetable Crystal Dumpling', 'ch', 'starter', 'veg', 'Dim sum', null, 5),
('Vegetable Sanchoi Bao', 'ch', 'starter', 'veg', 'Bao', null, 6),
('Cottage Cheese Smoked Chilli Bao', 'ch', 'starter', 'veg', 'Bao', null, 7),
('Asparagus Tempura Roll', 'ch', 'starter', 'veg', 'Sushi roll', null, 8),
('Crispy Spicy Avocado Roll', 'ch', 'starter', 'veg', 'Sushi roll', null, 9),
('Philippine Mango Roll', 'ch', 'starter', 'veg', 'Sushi roll', null, 10),
('Asian Crispy Potato', 'ch', 'starter', 'veg', 'Wok starter', null, 11),
('Crispy Thai Lotus Stem With Curry Leaves', 'ch', 'starter', 'veg', 'Wok starter', null, 12),
('Crispy Vegetable Konji', 'ch', 'starter', 'veg', 'Wok starter', null, 13),
('Veg Manchurian Dry', 'ch', 'starter', 'veg', 'Wok starter', null, 14),
('Asian Paneer Chilli', 'ch', 'starter', 'veg', 'Wok starter', null, 15),
('Diced Tofu Smoked Chilli', 'ch', 'starter', 'veg', 'Wok starter', null, 16),
('Crispy Schezwan Chilli Baby Corn', 'ch', 'starter', 'veg', 'Wok starter', null, 17),
('Sauteed Zucchini, Baby Corn & Mushroom Ginger Chilli', 'ch', 'starter', 'veg', 'Wok starter', null, 18),
('Crescent Chicken Dumplings', 'ch', 'starter', 'nonveg', 'Dim sum', null, 19),
('Chicken Gyoza', 'ch', 'starter', 'nonveg', 'Dim sum', null, 20),
('Prawn Har Gao', 'ch', 'starter', 'nonveg', 'Dim sum', null, 21),
('Chicken Siu Mai', 'ch', 'starter', 'nonveg', 'Dim sum', null, 22),
('Chicken Basil Dumplings', 'ch', 'starter', 'nonveg', 'Dim sum', null, 23),
('Chicken Spring Roll', 'ch', 'starter', 'nonveg', 'Dim sum', null, 24),
('Prawn Tempura Bao', 'ch', 'starter', 'nonveg', 'Bao', null, 25),
('Chicken BBQ Bao', 'ch', 'starter', 'nonveg', 'Bao', null, 26),
('Prawn Tempura Roll', 'ch', 'starter', 'nonveg', 'Sushi roll', null, 27),
('Salmon Roll', 'ch', 'starter', 'nonveg', 'Sushi roll', null, 28),
('Diced Chicken With Assorted Pepper & Ginger', 'ch', 'starter', 'nonveg', 'Wok starter', null, 29),
('Drums Of Heaven Hong Kong', 'ch', 'starter', 'nonveg', 'Wok starter', null, 30),
('Drums Of Heaven Shang Dong', 'ch', 'starter', 'nonveg', 'Wok starter', null, 31),
('Drums Of Heaven Hunan', 'ch', 'starter', 'nonveg', 'Wok starter', null, 32),
('Asian Chicken Chilli', 'ch', 'starter', 'nonveg', 'Wok starter', null, 33),
('Chicken Tai Pei', 'ch', 'starter', 'nonveg', 'Wok starter', null, 34),
('Dragon Chicken', 'ch', 'starter', 'nonveg', 'Wok starter', null, 35),
('Chicken Hunan Dry', 'ch', 'starter', 'nonveg', 'Wok starter', null, 36),
('Sea Bass Chilli Basil', 'ch', 'starter', 'nonveg', 'Wok starter', null, 37),
('Crispy Chicken', 'ch', 'starter', 'nonveg', 'Wok starter', null, 38),
('Fish Pepper Garlic', 'ch', 'starter', 'nonveg', 'Wok starter', null, 39),
('Asian Fried Chilli Fish', 'ch', 'starter', 'nonveg', 'Wok starter', null, 40),
('Dynamite Prawns', 'ch', 'starter', 'nonveg', 'Wok starter', null, 41),
('King Prawns', 'ch', 'starter', 'nonveg', 'Wok starter', 'Sauce: Hunan / Kimlee / Butter Garlic', 42),
('Mixed Vegetable', 'ch', 'main', 'veg', 'Wok & curry', 'Sauce: Chilli Basil / Hot Garlic', 43),
('Wok Tossed Greens', 'ch', 'main', 'veg', 'Wok & curry', null, 44),
('Tofu In Smoked Chilli', 'ch', 'main', 'veg', 'Wok & curry', null, 45),
('Asian Paneer Chilli Sauce', 'ch', 'main', 'veg', 'Wok & curry', null, 46),
('Tofu Schezwan Chilli', 'ch', 'main', 'veg', 'Wok & curry', null, 47),
('Veg Croquettes Manchurian Sauce', 'ch', 'main', 'veg', 'Wok & curry', null, 48),
('Thai Curry', 'ch', 'main', 'veg', 'Wok & curry', 'Red / Green', 49),
('Corn Potato In Asian Chilli', 'ch', 'main', 'veg', 'Wok & curry', null, 50),
('Asian Chicken Chilli In Jiang Sauce', 'ch', 'main', 'nonveg', 'Wok & curry', null, 51),
('Smoked Chicken', 'ch', 'main', 'nonveg', 'Wok & curry', null, 52),
('Hot Pot Chicken With Mushroom', 'ch', 'main', 'nonveg', 'Wok & curry', null, 53),
('Chilli Basil Chicken', 'ch', 'main', 'nonveg', 'Wok & curry', null, 54),
('Diced Chicken In Hot Garlic Sauce', 'ch', 'main', 'nonveg', 'Wok & curry', null, 55),
('Lemon Honey Glazed Chicken', 'ch', 'main', 'nonveg', 'Wok & curry', null, 56),
('Thai Curry (Chicken or Prawns)', 'ch', 'main', 'nonveg', 'Wok & curry', 'Red / Green', 57),
('Fish In Hot Garlic Sauce', 'ch', 'main', 'nonveg', 'Wok & curry', null, 58),
('Sea Bass', 'ch', 'main', 'nonveg', 'Wok & curry', 'Sauce: Chilli Basil / Schezwan Chilli', 59),
('King Prawns', 'ch', 'main', 'nonveg', 'Wok & curry', 'Sauce: Chilli Basil / Hot Garlic / Oyster', 60),
('Lobster', 'ch', 'main', 'nonveg', 'Wok & curry', 'Sauce: Hot Basil / Sichuan Chilli / Seafood Coriander', 61),
('Wok Tossed Greens', 'ch', 'main', 'nonveg', 'Wok & curry', 'With Chicken / Fish / Prawns', 62),
('Steamed Rice', 'ch', 'rice', 'veg', 'Rice', null, 63),
('Steamed Jasmine Rice', 'ch', 'rice', 'veg', 'Rice', null, 64),
('Vegetable Fried Rice', 'ch', 'rice', 'veg', 'Rice', 'Regular / Burnt Garlic / Schezwan', 65),
('Egg Fried Rice', 'ch', 'rice', 'nonveg', 'Rice', 'Regular / Burnt Garlic / Schezwan', 66),
('Chicken Fried Rice', 'ch', 'rice', 'nonveg', 'Rice', 'Regular / Burnt Garlic / Schezwan', 67),
('Prawns Fried Rice', 'ch', 'rice', 'nonveg', 'Rice', 'Regular / Burnt Garlic / Schezwan', 68),
('Black Pepper Fried Rice', 'ch', 'rice', null, 'Rice', 'Veg / Chicken / Prawns', 69),
('Nasi Goreng Rice', 'ch', 'rice', null, 'Rice', 'Veg / Chicken / Prawns', 70),
('Wok Tossed Hakka Noodles', 'ch', 'noodle', null, 'Noodles', 'Regular / Schezwan - Veg / Chicken / Prawns', 71),
('Sizzling Brownie With Ice Cream', 'ch', 'dessert', null, 'Dessert', null, 72),
('Chocolate Rolls', 'ch', 'dessert', null, 'Dessert', null, 73),
('Steamed Coconut Dumpling With Honey Sesame Sauce', 'ch', 'dessert', null, 'Dessert', null, 74),
('Caramel Custard', 'ch', 'dessert', null, 'Dessert', null, 75),
('Rambutan With Vanilla Ice Cream', 'ch', 'dessert', null, 'Dessert', null, 76),
('Bharwani Tandoori Kumbh', 'in', 'starter', 'veg', 'Tandoor', null, 77),
('Malai Paneer Tikka', 'in', 'starter', 'veg', 'Tandoor', null, 78),
('Veg Seekh Kebab', 'in', 'starter', 'veg', 'Tandoor', null, 79),
('Malai Broccoli', 'in', 'starter', 'veg', 'Tandoor', null, 80),
('Veg Harabhara Kebab', 'in', 'starter', 'veg', 'Tandoor', null, 81),
('Punjabi Paneer Tikka', 'in', 'starter', 'veg', 'Tandoor', null, 82),
('Malai Soya Chaap', 'in', 'starter', 'veg', 'Tandoor', null, 83),
('Tandoori Soya Chaap', 'in', 'starter', 'veg', 'Tandoor', null, 84),
('Aatishi Aaloo', 'in', 'starter', 'veg', 'Tandoor', null, 85),
('Soya Chaap Roll', 'in', 'starter', 'veg', 'Kathi roll', null, 86),
('Paneer Tikka Roll', 'in', 'starter', 'veg', 'Kathi roll', null, 87),
('Firangi Chicken Tikka', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 88),
('Achari Chicken Tikka', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 89),
('Kasturi Chicken Tikka', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 90),
('Murgh Malai Tikka', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 91),
('Tandoori Chicken (Full)', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 92),
('Tandoori Chicken (Half)', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 93),
('Chicken Seekh Kebab', 'in', 'starter', 'nonveg', 'Tandoor - Chicken', null, 94),
('Lakhnowi Tunday Kabab', 'in', 'starter', 'nonveg', 'Tandoor - Mutton', null, 95),
('Dum Pukht Kakori', 'in', 'starter', 'nonveg', 'Tandoor - Mutton', null, 96),
('Mutton Boti Kebab', 'in', 'starter', 'nonveg', 'Tandoor - Mutton', null, 97),
('Loshani Jhinga Kalimirch', 'in', 'starter', 'nonveg', 'Tandoor - Seafood', null, 98),
('Ajwani Fish Tikka', 'in', 'starter', 'nonveg', 'Tandoor - Seafood', null, 99),
('Chicken Tikka Roll', 'in', 'starter', 'nonveg', 'Kathi roll', null, 100),
('Mutton Boti Roll', 'in', 'starter', 'nonveg', 'Kathi roll', null, 101),
('Egg Roll', 'in', 'starter', 'nonveg', 'Kathi roll', null, 102),
('Paneer Tikka Masala', 'in', 'main', 'veg', 'Curry & dal', null, 103),
('Palak Paneer', 'in', 'main', 'veg', 'Curry & dal', null, 104),
('Mirch Masala Soya Chaap', 'in', 'main', 'veg', 'Curry & dal', null, 105),
('Matar Mushroom', 'in', 'main', 'veg', 'Curry & dal', null, 106),
('Kadhai Paneer', 'in', 'main', 'veg', 'Curry & dal', null, 107),
('Dal Makhani', 'in', 'main', 'veg', 'Curry & dal', null, 108),
('Double Dal Tadka', 'in', 'main', 'veg', 'Curry & dal', null, 109),
('Dil Khush Kofta', 'in', 'main', 'veg', 'Curry & dal', null, 110),
('Subz Diwani Handi', 'in', 'main', 'veg', 'Curry & dal', null, 111),
('Butter Chicken', 'in', 'main', 'nonveg', 'Curry - Chicken', null, 112),
('Chicken Labab Dar', 'in', 'main', 'nonveg', 'Curry - Chicken', null, 113),
('Bhatti Ka Dum Murgh', 'in', 'main', 'nonveg', 'Curry - Chicken', null, 114),
('Murgh Masaalam', 'in', 'main', 'nonveg', 'Curry - Chicken', null, 115),
('Chicken Tikka Masala', 'in', 'main', 'nonveg', 'Curry - Chicken', null, 116),
('Egg Masala', 'in', 'main', 'nonveg', 'Curry - Egg', null, 117),
('Lahori Gosht', 'in', 'main', 'nonveg', 'Curry - Mutton', null, 118),
('Mutton Kheema Pav', 'in', 'main', 'nonveg', 'Curry - Mutton', null, 119),
('Mutton Rogan Josh', 'in', 'main', 'nonveg', 'Curry - Mutton', null, 120),
('Bhuna Tawa Maas', 'in', 'main', 'nonveg', 'Curry - Mutton', null, 121),
('Dum Handi Ka Gosht', 'in', 'main', 'nonveg', 'Curry - Mutton', null, 122),
('Jeera Rice', 'in', 'rice', 'veg', 'Rice', null, 123),
('Dal Khichdi', 'in', 'rice', 'veg', 'Rice', null, 124),
('Steamed Rice', 'in', 'rice', 'veg', 'Rice', null, 125),
('Subz Veg Biryani', 'in', 'biryani', 'veg', 'Biryani - Veg', null, 126),
('Soya Chaap Biryani', 'in', 'biryani', 'veg', 'Biryani - Veg', null, 127),
('Paneer Tikka Biryani', 'in', 'biryani', 'veg', 'Biryani - Veg', null, 128),
('Chicken Tikka Biryani', 'in', 'biryani', 'nonveg', 'Biryani - Chicken', null, 129),
('Awadhi Murgh Dum Biryani', 'in', 'biryani', 'nonveg', 'Biryani - Chicken', null, 130),
('Egg Masala Biryani', 'in', 'biryani', 'nonveg', 'Biryani - Chicken', null, 131),
('Nalli Biryani', 'in', 'biryani', 'nonveg', 'Biryani - Mutton', null, 132),
('Raan Biryani (Half)', 'in', 'biryani', 'nonveg', 'Biryani - Mutton', null, 133),
('Raan Biryani (Special)', 'in', 'biryani', 'nonveg', 'Biryani - Mutton', null, 134),
('Yakhni Dum Gosht Biryani', 'in', 'biryani', 'nonveg', 'Biryani - Mutton', null, 135),
('Tandoori Roti', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 136),
('Pyaaz Mirch Ki Roti', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 137),
('Laccha Paratha', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 138),
('Mint Laccha Paratha', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 139),
('Ajwani Laccha Paratha', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 140),
('Tandoori Naan', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 141),
('Romali Roti', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 142),
('Garlic Naan', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 143),
('Chilli Garlic Naan', 'in', 'bread', 'veg', 'Indian bread', 'Butter / Plain', 144),
('Gulab Jamun', 'in', 'dessert', null, 'Dessert', null, 145),
('Kesar Da Phirni', 'in', 'dessert', null, 'Dessert', null, 146)
on conflict (name, cat) do nothing;

insert into public.menu_config (id, data) values (true, '{"PRICES":{"ic":{"buffet":[109,129,149,159],"delivery":[49,69,99,110],"live":[110,130,150,175]},"in":{"buffet":[119,139,159,179],"delivery":[59,79,99,119],"live":[139,159,169,189]},"ch":{"buffet":[99,119,139,149],"delivery":[59,79,99,119],"live":[139,159,169,189]}},"Q":{"1":{"sv":1,"snv":2,"mv":1,"mnv":1,"rn":1,"bb":1,"ds":1},"2":{"sv":2,"snv":2,"mv":2,"mnv":2,"rn":1,"bb":1,"ds":2},"3":{"sv":2,"snv":3,"mv":2,"mnv":3,"rn":2,"bb":2,"ds":2},"4":{"sv":3,"snv":3,"mv":3,"mnv":3,"rn":2,"bb":2,"ds":2}},"THEMES":[{"id":"t1","name":"Classic Ivory","desc":"Ivory and gold, timeless elegance","price":0,"c":["#F6EFDD","#E7DAB8","#C9963B","#8A6A2A"]},{"id":"t2","name":"Garden Green","desc":"Fresh foliage, calm and natural","price":0,"c":["#DCEBDD","#B9D3B5","#4E8B5A","#145244"]},{"id":"t3","name":"Festive Marigold","desc":"Warm marigold and orange, joyful","price":0,"c":["#FCE9C4","#F2CE86","#E58A1F","#B5502B"]},{"id":"t4","name":"Royal Mughal","desc":"Deep maroon, gold arches, royal feel","price":900,"c":["#5A1A25","#3E1119","#E9C77E","#C9963B"]},{"id":"t5","name":"Arabian Nights","desc":"Lanterns, crescent moon and starlight","price":1200,"c":["#14264A","#0C1830","#F0C868","#C9963B"]},{"id":"t6","name":"Crystal Luxe","desc":"Chandeliers, crystal and white florals","price":1800,"c":["#EEF1F5","#D5DBE5","#8FA3BF","#FFFFFF"]}],"CAT_W":[1,1.5,0.8,0.7],"COMP":[[3,2,2,1],[4,4,2,2],[5,5,4,2],[6,6,4,2]],"CUSTOM_MARKUP":1.1}'::jsonb)
  on conflict (id) do update set data = excluded.data, updated_at = now();

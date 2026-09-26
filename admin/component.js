class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { screen: null, name: '', cc: '+971', phone: '', emirate: '', date: '', time: '', pax: 18, paxEdit: null, pureVeg: false, minWarn: false, custMinOk: false, detailsWarn: false, type: null, layout: null, venue: null, cuisine: 'ic', pkg: null, theme: null, themeView: null, eventNote: '', returnTo: null, pdfMsg: '', zoom: null, notes: {}, noteFor: null, noteDraft: '', consent: false, tab: 'starters', fcu: 'all', sub: 0, note: '', sel: {}, selKey: '' };
    // Dummy photo tiles for now; real photos replace the glyph tile later.
    this.ITEMS = [];
    const add = (cu, cat, diet, sub, list) => list.forEach((n) => {
      const p = Array.isArray(n) ? n : [n, ''];
      this.ITEMS.push({ name: p[0], note: p[1], cu: cu, cat: cat, diet: diet, sub: sub });
    });
    const SAUCE3 = 'Regular / Burnt Garlic / Schezwan';
    const VCP = 'Veg / Chicken / Prawns';
    // ---------- CHINESE ----------
    add('ch', 'starter', 'veg', 'Dim sum', ['Vegetable Spring Roll', 'Vegetable Gyoza', 'Steamed Wonton Pickle Chilli', 'Vegetable Basil Dumplings', 'Edamame Dumpling With Truffle Oil', 'Vegetable Crystal Dumpling']);
    add('ch', 'starter', 'veg', 'Bao', ['Vegetable Sanchoi Bao', 'Cottage Cheese Smoked Chilli Bao']);
    add('ch', 'starter', 'veg', 'Sushi roll', ['Asparagus Tempura Roll', 'Crispy Spicy Avocado Roll', 'Philippine Mango Roll']);
    add('ch', 'starter', 'veg', 'Wok starter', ['Asian Crispy Potato', 'Crispy Thai Lotus Stem With Curry Leaves', 'Crispy Vegetable Konji', 'Veg Manchurian Dry', 'Asian Paneer Chilli', 'Diced Tofu Smoked Chilli', 'Crispy Schezwan Chilli Baby Corn', 'Sauteed Zucchini, Baby Corn & Mushroom Ginger Chilli']);
    add('ch', 'starter', 'nonveg', 'Dim sum', ['Crescent Chicken Dumplings', 'Chicken Gyoza', 'Prawn Har Gao', 'Chicken Siu Mai', 'Chicken Basil Dumplings', 'Chicken Spring Roll']);
    add('ch', 'starter', 'nonveg', 'Bao', ['Prawn Tempura Bao', 'Chicken BBQ Bao']);
    add('ch', 'starter', 'nonveg', 'Sushi roll', ['Prawn Tempura Roll', 'Salmon Roll']);
    add('ch', 'starter', 'nonveg', 'Wok starter', ['Diced Chicken With Assorted Pepper & Ginger', 'Drums Of Heaven Hong Kong', 'Drums Of Heaven Shang Dong', 'Drums Of Heaven Hunan', 'Asian Chicken Chilli', 'Chicken Tai Pei', 'Dragon Chicken', 'Chicken Hunan Dry', 'Sea Bass Chilli Basil', 'Crispy Chicken', 'Fish Pepper Garlic', 'Asian Fried Chilli Fish', 'Dynamite Prawns', ['King Prawns', 'Sauce: Hunan / Kimlee / Butter Garlic']]);
    add('ch', 'main', 'veg', 'Wok & curry', [['Mixed Vegetable', 'Sauce: Chilli Basil / Hot Garlic'], 'Wok Tossed Greens', 'Tofu In Smoked Chilli', 'Asian Paneer Chilli Sauce', 'Tofu Schezwan Chilli', 'Veg Croquettes Manchurian Sauce', ['Thai Curry', 'Red / Green'], 'Corn Potato In Asian Chilli']);
    add('ch', 'main', 'nonveg', 'Wok & curry', ['Asian Chicken Chilli In Jiang Sauce', 'Smoked Chicken', 'Hot Pot Chicken With Mushroom', 'Chilli Basil Chicken', 'Diced Chicken In Hot Garlic Sauce', 'Lemon Honey Glazed Chicken', ['Thai Curry (Chicken or Prawns)', 'Red / Green'], 'Fish In Hot Garlic Sauce', ['Sea Bass', 'Sauce: Chilli Basil / Schezwan Chilli'], ['King Prawns', 'Sauce: Chilli Basil / Hot Garlic / Oyster'], ['Lobster', 'Sauce: Hot Basil / Sichuan Chilli / Seafood Coriander'], ['Wok Tossed Greens', 'With Chicken / Fish / Prawns']]);
    add('ch', 'rice', null, 'Rice', ['Steamed Rice', 'Steamed Jasmine Rice', ['Vegetable Fried Rice', SAUCE3], ['Egg Fried Rice', SAUCE3], ['Chicken Fried Rice', SAUCE3], ['Prawns Fried Rice', SAUCE3], ['Black Pepper Fried Rice', VCP], ['Nasi Goreng Rice', VCP]]);
    add('ch', 'noodle', null, 'Noodles', [['Wok Tossed Hakka Noodles', 'Regular / Schezwan - ' + VCP]]);
    add('ch', 'dessert', null, 'Dessert', ['Sizzling Brownie With Ice Cream', 'Chocolate Rolls', 'Steamed Coconut Dumpling With Honey Sesame Sauce', 'Caramel Custard', 'Rambutan With Vanilla Ice Cream']);
    // ---------- INDIAN ----------
    add('in', 'starter', 'veg', 'Tandoor', ['Bharwani Tandoori Kumbh', 'Malai Paneer Tikka', 'Veg Seekh Kebab', 'Malai Broccoli', 'Veg Harabhara Kebab', 'Punjabi Paneer Tikka', 'Malai Soya Chaap', 'Tandoori Soya Chaap', 'Aatishi Aaloo']);
    add('in', 'starter', 'veg', 'Kathi roll', ['Soya Chaap Roll', 'Paneer Tikka Roll']);
    add('in', 'starter', 'nonveg', 'Tandoor - Chicken', ['Firangi Chicken Tikka', 'Achari Chicken Tikka', 'Kasturi Chicken Tikka', 'Murgh Malai Tikka', 'Tandoori Chicken (Full)', 'Tandoori Chicken (Half)', 'Chicken Seekh Kebab']);
    add('in', 'starter', 'nonveg', 'Tandoor - Mutton', ['Lakhnowi Tunday Kabab', 'Dum Pukht Kakori', 'Mutton Boti Kebab']);
    add('in', 'starter', 'nonveg', 'Tandoor - Seafood', ['Loshani Jhinga Kalimirch', 'Ajwani Fish Tikka']);
    add('in', 'starter', 'nonveg', 'Kathi roll', ['Chicken Tikka Roll', 'Mutton Boti Roll', 'Egg Roll']);
    add('in', 'main', 'veg', 'Curry & dal', ['Paneer Tikka Masala', 'Palak Paneer', 'Mirch Masala Soya Chaap', 'Matar Mushroom', 'Kadhai Paneer', 'Dal Makhani', 'Double Dal Tadka', 'Dil Khush Kofta', 'Subz Diwani Handi']);
    add('in', 'main', 'nonveg', 'Curry - Chicken', ['Butter Chicken', 'Chicken Labab Dar', 'Bhatti Ka Dum Murgh', 'Murgh Masaalam', 'Chicken Tikka Masala']);
    add('in', 'main', 'nonveg', 'Curry - Egg', ['Egg Masala']);
    add('in', 'main', 'nonveg', 'Curry - Mutton', ['Lahori Gosht', 'Mutton Kheema Pav', 'Mutton Rogan Josh', 'Bhuna Tawa Maas', 'Dum Handi Ka Gosht']);
    add('in', 'rice', null, 'Rice', ['Jeera Rice', 'Dal Khichdi', 'Steamed Rice']);
    add('in', 'biryani', null, 'Biryani - Veg', ['Subz Veg Biryani', 'Soya Chaap Biryani', 'Paneer Tikka Biryani']);
    add('in', 'biryani', null, 'Biryani - Chicken', ['Chicken Tikka Biryani', 'Awadhi Murgh Dum Biryani', 'Egg Masala Biryani']);
    add('in', 'biryani', null, 'Biryani - Mutton', ['Nalli Biryani', 'Raan Biryani (Half)', 'Raan Biryani (Special)', 'Yakhni Dum Gosht Biryani']);
    add('in', 'bread', null, 'Indian bread', [['Tandoori Roti', 'Butter / Plain'], ['Pyaaz Mirch Ki Roti', 'Butter / Plain'], ['Laccha Paratha', 'Butter / Plain'], ['Mint Laccha Paratha', 'Butter / Plain'], ['Ajwani Laccha Paratha', 'Butter / Plain'], ['Tandoori Naan', 'Butter / Plain'], ['Romali Roti', 'Butter / Plain'], ['Garlic Naan', 'Butter / Plain'], ['Chilli Garlic Naan', 'Butter / Plain']]);
    add('in', 'dessert', null, 'Dessert', ['Gulab Jamun', 'Kesar Da Phirni']);
    this.ITEMS.forEach((x, i) => { x.id = 'i' + i; });
    // Diet tags for staples (rice / biryani), so Pure Veg can hide the non-veg ones
    const NV = ['Egg Fried Rice', 'Chicken Fried Rice', 'Prawns Fried Rice', 'Chicken Tikka Biryani', 'Awadhi Murgh Dum Biryani', 'Egg Masala Biryani', 'Nalli Biryani', 'Raan Biryani (Half)', 'Raan Biryani (Special)', 'Yakhni Dum Gosht Biryani'];
    const VG = ['Steamed Rice', 'Steamed Jasmine Rice', 'Vegetable Fried Rice', 'Jeera Rice', 'Dal Khichdi', 'Subz Veg Biryani', 'Soya Chaap Biryani', 'Paneer Tikka Biryani'];
    this.ITEMS.forEach((x) => {
      if (x.diet) return;
      if (NV.indexOf(x.name) >= 0) x.diet = 'nonveg';
      else if (VG.indexOf(x.name) >= 0 || x.cat === 'bread') x.diet = 'veg';
    });
    // Per-person prices, from the menu sheet: [package 1..4]
    this.PRICES = {
      ic: { buffet: [109, 129, 149, 159], delivery: [49, 69, 99, 110], live: [110, 130, 150, 175] },
      in: { buffet: [119, 139, 159, 179], delivery: [59, 79, 99, 119], live: [139, 159, 169, 189] },
      ch: { buffet: [99, 119, 139, 149], delivery: [59, 79, 99, 119], live: [139, 159, 169, 189] }
    };
    // Total dishes in each package (starters + mains + staples + dessert), used to price custom menus
    this.COMP = [[3, 2, 2, 1], [4, 4, 2, 2], [5, 5, 4, 2], [6, 6, 4, 2]]; // starters, mains, staples, dessert per package
    this.CAT_W = [1, 1.5, 0.8, 0.7]; // relative cost weight of one dish: starter, main, staple, dessert
    this.CUSTOM_MARKUP = 1.10;
    // Event themes: first 3 included with the package, last 3 are premium (dummy prices, flat per event)
    this.THEMES = [
      { id: 't1', name: 'Classic Ivory', desc: 'Ivory and gold, timeless elegance', price: 0, c: ['#F6EFDD', '#E7DAB8', '#C9963B', '#8A6A2A'] },
      { id: 't2', name: 'Garden Green', desc: 'Fresh foliage, calm and natural', price: 0, c: ['#DCEBDD', '#B9D3B5', '#4E8B5A', '#145244'] },
      { id: 't3', name: 'Festive Marigold', desc: 'Warm marigold and orange, joyful', price: 0, c: ['#FCE9C4', '#F2CE86', '#E58A1F', '#B5502B'] },
      { id: 't4', name: 'Royal Mughal', desc: 'Deep maroon, gold arches, royal feel', price: 900, c: ['#5A1A25', '#3E1119', '#E9C77E', '#C9963B'] },
      { id: 't5', name: 'Arabian Nights', desc: 'Lanterns, crescent moon and starlight', price: 1200, c: ['#14264A', '#0C1830', '#F0C868', '#C9963B'] },
      { id: 't6', name: 'Crystal Luxe', desc: 'Chandeliers, crystal and white florals', price: 1800, c: ['#EEF1F5', '#D5DBE5', '#8FA3BF', '#FFFFFF'] }
    ];
    this.THEME_INFO = {
      t1: { long: 'A timeless ivory and gold setup with soft fairy lights, classic arches and elegant table styling. Suits almost any celebration.', incl: ['Ivory and gold backdrop with arch frames', 'Fairy-light canopy', 'Elegant table centrepieces with candles', 'Matching table linen and napkins', 'Welcome signboard'], best: ['Weddings', 'Anniversaries', 'Corporate dinners'] },
      t2: { long: 'Fresh green foliage, hanging vines and natural textures create a calm, relaxed garden-party mood.', incl: ['Foliage wall and leafy arch', 'Hanging greenery accents', 'Wood and greenery table centrepieces', 'Natural linen table runners', 'Welcome signboard'], best: ['Birthdays', 'Baby showers', 'Outdoor lunches'] },
      t3: { long: 'Bright marigold garlands, warm orange tones and traditional accents for a joyful, festive feel.', incl: ['Marigold garland hangings', 'Warm-coloured drapes', 'Brass diya and floral centrepieces', 'Traditional table decor', 'Welcome signboard'], best: ['Festivals', 'Engagements', 'Family gatherings'] },
      t4: { long: 'Deep maroon drapes, gold-framed Mughal arches and rich detailing for a truly royal evening.', incl: ['Maroon and gold stage backdrop', 'Gold-framed Mughal arches', 'Premium drapes and floor styling', 'Brass and gold table centrepieces', 'Custom signage and entrance decor'], best: ['Weddings', 'Receptions', 'Grand celebrations'] },
      t5: { long: 'Lanterns, a crescent moon and starlit ceiling effects create a magical Arabian night atmosphere.', incl: ['Hanging lantern installation', 'Crescent and star backdrop', 'Deep-blue draping and starlit lighting', 'Gold lantern table centrepieces', 'Custom signage and entrance decor'], best: ['Ramadan gatherings', 'Eid parties', 'Gala dinners'] },
      t6: { long: 'Crystal chandeliers, white florals and soft silver tones for a luxurious, modern look.', incl: ['Crystal chandelier installation', 'White floral arrangements', 'Silver and white table styling', 'Mirror-top table centrepieces', 'Custom signage and entrance decor'], best: ['Weddings', 'Award nights', 'Luxury launches'] }
    };
    const d0 = new Date();
    const p2 = (n) => (n < 10 ? '0' : '') + n;
    this.REF = 'CM-' + String(d0.getFullYear()).slice(2) + p2(d0.getMonth() + 1) + p2(d0.getDate()) + '-' + (1000 + Math.floor(Math.random() * 9000));
    // Choices allowed per package, from the menu sheet
    this.Q = {
      '1': { sv: 1, snv: 2, mv: 1, mnv: 1, rn: 1, bb: 1, ds: 1 },
      '2': { sv: 2, snv: 2, mv: 2, mnv: 2, rn: 1, bb: 1, ds: 2 },
      '3': { sv: 2, snv: 3, mv: 2, mnv: 3, rn: 2, bb: 2, ds: 2 },
      '4': { sv: 3, snv: 3, mv: 3, mnv: 3, rn: 2, bb: 2, ds: 2 }
    };
  }
  // Category rates for custom menus. Package price = base (salads, sides, service) + dishes x category rate.
  // Fitted from the 4 package prices: weighted dishes per package vs price (least squares), then +10%.
  catRates() {
    const st = this.state;
    const setup = st.type === 'delivery' ? 'delivery' : (st.layout === 'live' ? 'live' : 'buffet');
    const P = this.PRICES[st.cuisine][setup];
    const w = this.CAT_W, X = this.COMP.map((c) => c[0] * w[0] + c[1] * w[1] + c[2] * w[2] + c[3] * w[3]);
    const mx = X.reduce((a, b) => a + b, 0) / 4, my = P.reduce((a, b) => a + b, 0) / 4;
    let sxy = 0, sxx = 0;
    for (let k = 0; k < 4; k++) { sxy += (X[k] - mx) * (P[k] - my); sxx += (X[k] - mx) * (X[k] - mx); }
    const unit = sxy / sxx, base = Math.max(my - unit * mx, 0);
    const r = (v) => Math.round(Math.round(v * this.CUSTOM_MARKUP * 1e6) / 1e6 + 1e-9);
    return { base: r(base), starters: r(unit * w[0]), mains: r(unit * w[1]), staples: r(unit * w[2]), dessert: r(unit * w[3]) };
  }
  customPP(n) {
    const c = this.catRates();
    return c.base + n.starters * c.starters + n.mains * c.mains + n.staples * c.staples + n.dessert * c.dessert;
  }
  pkgVals() {
    const MIN = 2000;
    const st = this.state;
    const setup = st.type === 'delivery' ? 'delivery' : (st.layout === 'live' ? 'live' : 'buffet');
    const popular = (this.props.popular ?? 2) - 1;
    const pax = st.pax;
    const pv = st.pureVeg;
    const fmt = (n) => n.toLocaleString('en-US');

    const PRICES = this.PRICES;
    const TIERS = [
      { st: '1 Veg · 2 Non Veg', stv: '3 Veg', mc: '1 Veg · 1 Non Veg', mcv: '2 Veg', rice: 'Rice / Noodles', bir: 'Biryani / Breads', ds: '1 selection' },
      { st: '2 Veg · 2 Non Veg', stv: '4 Veg', mc: '2 Veg · 2 Non Veg', mcv: '4 Veg', rice: 'Rice / Noodles', bir: 'Biryani / Breads', ds: '2 selections' },
      { st: '2 Veg · 3 Non Veg', stv: '5 Veg', mc: '2 Veg · 3 Non Veg', mcv: '5 Veg', rice: 'Rice + Noodles', bir: 'Biryani + Breads', ds: '2 selections' },
      { st: '3 Veg · 3 Non Veg', stv: '6 Veg', mc: '3 Veg · 3 Non Veg', mcv: '6 Veg', rice: 'Rice + Noodles', bir: 'Biryani + Breads', ds: '2 selections' }
    ];
    const CUISINES = [
      { id: 'ic', label: 'Indian & Chinese', grow: 1.7 },
      { id: 'in', label: 'Indian', grow: 1 },
      { id: 'ch', label: 'Chinese', grow: 1 }
    ];
    const prices = PRICES[st.cuisine][setup];
    const sel = (on) => ({
      border: on ? '#C9963B' : '#E4D9C2',
      shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)'
    });

    const pkgs = TIERS.map((t, i) => {
      const on = st.pkg === i;
      return Object.assign({
        name: 'Package ' + (i + 1),
        price: prices[i],
        popular: i === popular,
        on: on,
        pick: () => this.setState({ pkg: st.pkg === i ? null : i, consent: false, minWarn: false }),
        rows: [
          { k: 'Starters', v: pv ? t.stv : t.st },
          { k: 'Main course', v: pv ? t.mcv : t.mc },
          { k: 'Staples', v: t.rice + '\n' + t.bir },
          { k: 'Dessert', v: t.ds }
        ]
      }, sel(on));
    });

    const isCustom = st.pkg === 'custom';
    const hasPkg = typeof st.pkg === 'number';
    const price = hasPkg ? prices[st.pkg] : 0;
    const raw = price * pax;
    const belowMin = hasPkg && raw < MIN;
    const applied = belowMin && st.consent;
    let totalText = '—', totalSub = 'Pick a package to see the price', totalColor = '#0E3B33';
    if (isCustom) { totalText = 'Custom menu'; totalSub = 'Base ' + this.catRates().base + ' Dh + price of each dish you pick'; }
    if (hasPkg) {
      totalText = fmt(applied ? MIN : raw) + ' Dh';
      totalSub = applied ? 'Minimum applied (was ' + fmt(raw) + ' Dh)' : pax + ' guests × ' + price + ' Dh';
      if (belowMin && !st.consent) totalColor = st.minWarn ? '#B3261E' : '#8A3B12';
    }
    const ready = isCustom || hasPkg;

    return {
      cuisines: CUISINES.map((c) => {
        const on = st.cuisine === c.id;
        return {
          label: c.label, grow: c.grow, on: on,
          bg: on ? '#D3E7DE' : '#FFFFFF',
          color: '#0E3B33',
          border: on ? '#2F7A64' : '#DDD3BF',
          pick: () => this.setState({ cuisine: c.id, consent: false, minWarn: false })
        };
      }),
      pkgs: pkgs,
      custom: Object.assign({ on: isCustom, off: !isCustom, pick: () => this.setState({ pkg: isCustom ? null : 'custom', consent: false, minWarn: false }) }, sel(isCustom)),
      pax: pax,
      pkgCaption: pv ? 'Pure Veg menu · salads & sides incl.' : 'Salads & sides included',
      belowMin: belowMin,
      needPax: hasPkg ? Math.ceil(MIN / price) : pax,
      bumpPax: () => this.setState({ pax: Math.ceil(MIN / price), consent: false, minWarn: false }),
      consent: st.consent,
      toggleConsent: () => this.setState({ consent: !this.state.consent }),
      totalText: totalText,
      totalSub: totalSub,
      totalColor: totalColor,
      ready: ready,
      // under the minimum and not yet accepted: short hint under the total, and the main button accepts it
      // under the minimum: one line under the total; it turns red if Save & Next is tapped
      minOpen: belowMin && !st.minWarn && !st.consent,
      totalSubShown: !belowMin || !!st.consent,
      minHint: hasPkg ? 'Min. 2,000 Dh · Add ' + (Math.ceil(MIN / price) - pax) + (Math.ceil(MIN / price) - pax === 1 ? ' guest' : ' guests') : '',
      minHintColor: '#8A3B12',
      minWarnOn: false,
      // after Save & Next is refused: add guests, or tick to pay the minimum
      minRowShown: belowMin && !!st.minWarn,
      minAddLabel: hasPkg ? 'Add ' + (Math.ceil(MIN / price) - pax) + (Math.ceil(MIN / price) - pax === 1 ? ' guest' : ' guests') : '',
      notReady: !ready,
      btnOpacity: 1
    };
  }

  itemsVals() {
    const st = this.state;
    const cuisine = st.cuisine;
    const tier = st.pkg === 'custom' ? 'custom' : String((typeof st.pkg === 'number' ? st.pkg : 1) + 1);
    const isCustom = tier === 'custom';
    const Q = this.Q;
    const pv = st.pureVeg;
    const q = isCustom ? null : Q[tier];
    const both = isCustom || tier === '3' || tier === '4';
    const cuLabel = { ic: 'Indian & Chinese', in: 'Indian', ch: 'Chinese' }[cuisine];
    const pool = this.ITEMS.filter((x) => (cuisine === 'ic' || x.cu === cuisine) && !(pv && x.diet === 'nonveg'));

    const DEFS = {
      starters: [
        { id: 'sv', title: 'Veg Starters', short: 'Veg', match: (x) => x.cat === 'starter' && x.diet === 'veg', need: q && (pv ? q.sv + q.snv : q.sv) },
        { id: 'snv', title: 'Non-Veg Starters', short: 'Non-Veg', match: (x) => x.cat === 'starter' && x.diet === 'nonveg', need: q && q.snv }
      ],
      mains: [
        { id: 'mv', title: 'Veg Main Course', short: 'Veg', match: (x) => x.cat === 'main' && x.diet === 'veg', need: q && (pv ? q.mv + q.mnv : q.mv) },
        { id: 'mnv', title: 'Non-Veg Main Course', short: 'Non-Veg', match: (x) => x.cat === 'main' && x.diet === 'nonveg', need: q && q.mnv }
      ],
      staples: [
        { id: 'rn', short: 'Rice / Noodles', title: both ? 'Rice & Noodles' : 'Rice or Noodles', match: (x) => x.cat === 'rice' || x.cat === 'noodle', need: q && q.rn },
        { id: 'bb', short: 'Biryani / Breads', title: both ? 'Biryani & Breads' : 'Biryani or Breads', match: (x) => x.cat === 'biryani' || x.cat === 'bread', need: q && q.bb }
      ],
      dessert: [
        { id: 'ds', title: 'Desserts', match: (x) => x.cat === 'dessert', need: q && q.ds }
      ]
    };
    const TABS = [
      { id: 'starters', label: 'Starters' },
      { id: 'mains', label: 'Mains' },
      { id: 'staples', label: 'Staples' },
      { id: 'dessert', label: 'Dessert' }
    ];

    const TILE = { iBowl: '#EEE0C4', iDump: '#F3E6C9', iRoll: '#E4EBD5', iSkew: '#F3DCCB', iBread: '#F1E3C0', iSweet: '#F3DCE0' };
    const iconOf = (x) => {
      if (x.cat === 'dessert') return 'iSweet';
      if (x.cat === 'bread') return 'iBread';
      if (x.sub.indexOf('Dim sum') === 0 || x.sub.indexOf('Bao') === 0) return 'iDump';
      if (x.sub.indexOf('Sushi') === 0 || x.sub.indexOf('Kathi') === 0) return 'iRoll';
      if (x.sub.indexOf('Tandoor') === 0) return 'iSkew';
      return 'iBowl';
    };

    // Build every group of every tab, with counts
    const built = {};
    let totalNeed = 0, totalDone = 0, totalPicked = 0;
    TABS.forEach((tb) => {
      built[tb.id] = [];
      DEFS[tb.id].forEach((d) => {
        const gp = pool.filter(d.match);
        if (!gp.length) return; // nothing on the menu for this cuisine
        const count = gp.filter((x) => st.sel[x.id]).length;
        const need = isCustom ? null : Math.min(d.need, gp.length);
        built[tb.id].push({ def: d, items: gp, count: count, need: need });
      });
    });

    const tabInfo = TABS.map((tb) => {
      const gs = built[tb.id];
      const need = gs.reduce((a, g) => a + (g.need || 0), 0);
      const done = gs.reduce((a, g) => a + (isCustom ? g.count : Math.min(g.count, g.need)), 0);
      totalNeed += need; totalDone += done;
      const complete = !isCustom && need > 0 && done >= need;
      return { tb: tb, need: need, done: done, complete: complete };
    });
    Object.keys(built).forEach((k) => built[k].forEach((g) => { totalPicked += g.count; }));

    const tabs = tabInfo.map((t) => {
      const on = st.tab === t.tb.id;
      return {
        label: t.tb.label, on: on,
        count: isCustom ? (t.done + ' picked') : (t.done + ' of ' + t.need),
        bg: on ? '#0E3B33' : '#FFFFFF',
        color: on ? '#FBF6EA' : '#0E3B33',
        subColor: on ? '#E9C77E' : (t.complete ? '#1F6B4E' : '#5A6863'),
        border: on ? '#0E3B33' : (t.complete ? '#2F7A64' : '#DDD3BF'),
        pick: () => { this._scrollTo = 'itemsTop'; this.setState({ tab: t.tb.id, sub: 0, note: '' }); }
      };
    });

    const showFilter = cuisine === 'ic';
    const filters = [['all', 'All'], ['in', 'Indian'], ['ch', 'Chinese']].map((f) => {
      const on = st.fcu === f[0];
      return {
        label: f[1], on: on,
        bg: on ? '#D3E7DE' : '#FFFFFF',
        border: on ? '#2F7A64' : '#DDD3BF',
        pick: () => this.setState({ fcu: f[0] })
      };
    });

    const tabGroups = built[st.tab] || [];
    const subIdx = Math.min(st.sub || 0, Math.max(tabGroups.length - 1, 0));
    const showSubs = tabGroups.length > 1;
    const subs = tabGroups.map((g, i) => {
      const on = i === subIdx;
      const done = !isCustom && g.count >= g.need;
      return {
        label: g.def.short,
        count: isCustom ? (g.count + ' picked') : (g.count + ' of ' + g.need),
        on: on,
        bg: on ? '#D3E7DE' : '#FFFFFF',
        border: on ? '#2F7A64' : (done ? '#2F7A64' : '#DDD3BF'),
        countColor: done ? '#1F6B4E' : '#5A6863',
        done: done,
        segBg: on ? '#FFFFFF' : 'transparent',
        segShadow: on ? '0 1px 3px rgba(14,59,51,0.18)' : 'none',
        pick: () => { this._scrollTo = 'itemsTop'; this.setState({ sub: i, note: '' }); }
      };
    });
    const shownGroups = showSubs ? [tabGroups[subIdx]] : tabGroups;
    const objById = {};
    const groups = shownGroups.map((g) => {
      const full = !isCustom && g.count >= g.need;
      const filtered = g.items.filter((x) => cuisine !== 'ic' || st.fcu === 'all' || x.cu === st.fcu);
      // the same dish can sit on both cuisine lists (e.g. Steamed Rice): show it once
      const shownNames = {};
      const visible = filtered.filter((x) => (shownNames[x.name] ? false : (shownNames[x.name] = true)));
      return {
        showHeader: !showSubs,
        title: g.def.title,
        pillText: isCustom ? (g.count + ' picked') : (g.count + ' of ' + g.need + (full ? ' - Done' : '')),
        pillBg: full ? '#D3E7DE' : '#EADFC8',
        pillColor: '#0E3B33',
        items: visible.map((x) => {
          const on = !!st.sel[x.id];
          const locked = !on && full;
          const icon = iconOf(x);
          const o = {
            name: x.name,
            caption: [cuisine === 'ic' ? (x.cu === 'in' ? 'Indian' : 'Chinese') : '', (pv ? (x.note || '').replace('Veg / Chicken / Prawns', 'Veg') : x.note) || x.sub, (pv && !x.diet && x.cat !== 'dessert') ? 'made Veg' : ''].filter(Boolean).join(' · '),
            tile: TILE[icon],
            hasDiet: !!x.diet,
            dietColor: x.diet === 'veg' ? '#2E7D32' : '#A8461B',
            on: on,
            locked: locked,
            opacity: locked ? 0.45 : 1,
            border: on ? '#C9963B' : '#E4D9C2',
            shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)',
            pick: () => {
              const sel = Object.assign({}, this.state.sel);
              const adding = !sel[x.id];
              if (adding) sel[x.id] = true; else delete sel[x.id];
              const extra = { note: '', minWarn: false, custMinOk: false };
              if (!adding) { const nn = Object.assign({}, this.state.notes); delete nn[x.id]; extra.notes = nn; }
              this.setState(Object.assign({ sel: sel }, extra));
              // group just filled: after a short pause (so the tick is seen) move on to what still needs items
              if (isCustom || !adding || g.items.filter((y) => sel[y.id]).length < g.need) return;
              const open = (h) => h.items.filter((y) => sel[y.id]).length < h.need;
              let move = null;
              const idx = tabGroups.findIndex((h, i) => i !== subIdx && open(h));
              if (idx >= 0) {
                move = { sub: idx, note: g.def.short + ' done. Now choose ' + tabGroups[idx].need + ' ' + tabGroups[idx].def.short + '.' };
              } else {
                const here = TABS.findIndex((t) => t.id === st.tab);
                const order = TABS.slice(here + 1).concat(TABS.slice(0, here));
                for (let k = 0; k < order.length && !move; k++) {
                  const gs = built[order[k].id];
                  const gi = gs.findIndex(open);
                  if (gi >= 0) move = { tab: order[k].id, sub: gi, note: TABS[here].label + ' done. Now choose ' + gs[gi].need + ' ' + gs[gi].def.title + '.' };
                }
                if (!move) move = { note: 'All dishes chosen. Tap Save & Next to continue.' };
              }
              clearTimeout(this._advanceTimer);
              this._advanceTimer = setTimeout(() => {
                if (this.state.screen !== 'items') return;
                // the dish may have been un-ticked during the pause: then stay put
                if (g.items.filter((y) => this.state.sel[y.id]).length < g.need) return;
                this._scrollTo = 'itemsTop';
                this.setState(move);
              }, 550);
            }
          };
          ['iBowl', 'iDump', 'iRoll', 'iSkew', 'iBread', 'iSweet'].forEach((k) => { o[k] = (k === icon); });
          // a real photo where we have one, otherwise the drawn icon
          const byCourse = window.DISH_PHOTOS_BY_COURSE || {};
          const shot = byCourse[x.name + '|' + x.cat + '|' + (x.diet || '')] ||
                       byCourse[x.name + '|' + x.cat] ||
                       (window.DISH_PHOTOS || {})[x.name];
          o.photo = shot ? 'images/web/' + shot + '.jpg' : '';
          o.hasPhoto = !!shot;
          o.noPhoto = !shot;
          o.zoom = () => this.setState({ zoom: x.id });
          const nt = (st.notes[x.id] || '').trim();
          o.hasNote = on && !!nt;
          o.noteText = nt;
          o.noteLabel = nt ? 'Edit note' : 'Add note';
          o.noteBg = nt ? '#F3D48F' : 'rgba(255,255,255,0.95)';
          o.openNote = () => this.setState({ noteFor: x.id, noteDraft: st.notes[x.id] || '' });
          objById[x.id] = o;
          return o;
        })
      };
    });

    const CHIPS = ['Extra spicy', 'Less spicy', 'Mild', 'No onion / garlic', 'Less oil', 'Extra gravy', 'Jain'];
    const nItem = st.noteFor ? this.ITEMS.find((y) => y.id === st.noteFor) : null;
    const draft = st.noteDraft || '';
    const noteChips = CHIPS.map((c) => {
      const has = draft.toLowerCase().indexOf(c.toLowerCase()) >= 0;
      return {
        label: c, on: has,
        bg: has ? '#D3E7DE' : '#FFFFFF', border: has ? '#2F7A64' : '#DDD3BF',
        pick: () => {
          const cur = this.state.noteDraft || '';
          const i = cur.toLowerCase().indexOf(c.toLowerCase());
          let next;
          if (i >= 0) next = (cur.slice(0, i) + cur.slice(i + c.length)).replace(/^[\s,]+|[\s,]+$/g, '').replace(/\s*,\s*,/g, ',');
          else next = cur.trim() ? cur.trim().replace(/[,\s]+$/, '') + ', ' + c : c;
          this.setState({ noteDraft: next });
        }
      };
    });
    const zo = st.zoom ? (objById[st.zoom] || null) : null;
    const zLabel = zo ? (zo.on ? 'Remove from my menu' : (zo.locked ? 'Limit reached for this group' : 'Add to my menu')) : '';
    const remaining = totalNeed - totalDone;
    const ready = isCustom ? totalPicked > 0 : remaining === 0;
    let hint, hintColor = '#5A6863';
    if (isCustom) {
      hint = totalPicked > 0 ? 'Add as many items as you like' : 'Pick the items you would like';
    } else if (ready) {
      hint = 'All items chosen - you are all set'; hintColor = '#1F6B4E';
    } else {
      hint = 'Choose ' + remaining + ' more item' + (remaining === 1 ? '' : 's') + ' to continue';
    }
    let custTotal = '', custSub = '', custPP = '', custSubColor = '#5A6863';
    let custBelowMin = false, custNeedPax = 0, custTotalColor = '#0E3B33';
    if (isCustom) {
      const fmt = (n) => n.toLocaleString('en-US');
      const pax = st.pax;
      if (!totalPicked) { custTotal = '-'; custPP = '-'; custSub = 'Pick dishes to see the approx. price'; }
      else {
        const pp = this.customPP({ starters: tabInfo[0].done, mains: tabInfo[1].done, staples: tabInfo[2].done, dessert: tabInfo[3].done });
        const raw = pp * pax;
        custPP = pp + ' Dh';
        custTotal = fmt(raw) + ' Dh';
        custSub = pax + ' guests × ' + pp + ' Dh · ' + totalPicked + ' dishes';
        if (raw < 2000) {
          custSub += ' — below the 2,000 Dh minimum'; custSubColor = '#8A5A00';
          custBelowMin = true; custNeedPax = Math.ceil(2000 / pp); custTotalColor = '#8A3B12';
        }
      }
    }
    return {
      context: (isCustom ? 'Custom menu' : 'Package ' + tier) + ' · ' + cuLabel + (pv ? ' · Pure Veg' : ''),
      tabs: tabs,
      showFilter: showFilter,
      filters: filters,
      fcu: st.fcu,
      setFilter: (e) => { this._scrollTo = 'itemsTop'; this.setState({ fcu: e.target.value }); },
      showToolRow: showFilter || showSubs,
      groups: groups,
      showSubs: showSubs,
      hasNote: !!st.note,
      note: st.note,
      subs: subs,
      hint: hint,
      hintColor: hintColor,
      progressText: isCustom ? (totalPicked + ' picked') : (totalDone + ' of ' + totalNeed),
      pct: isCustom ? (totalPicked > 0 ? 100 : 0) : (totalNeed ? Math.round(100 * totalDone / totalNeed) : 0),
      showCustPrice: isCustom,
      showProgress: !isCustom,
      custHasPrice: isCustom && totalPicked > 0,
      custNoPrice: isCustom && !totalPicked,
      custBelowMin: custBelowMin,
      custTotalColor: custTotalColor,
      custWarnShown: isCustom && custBelowMin && !!st.minWarn,
      custWarnText: 'Total is below the 2,000 Dh minimum. Add guests or dishes.',
      custBumpLabel: 'Make it ' + custNeedPax + ' guests',
      custBump: () => this.setState({ pax: custNeedPax, minWarn: false, custMinOk: false }),
      custMinOk: !!st.custMinOk,
      toggleCustMin: () => this.setState({ custMinOk: !this.state.custMinOk }),
      noteOpen: !!nItem,
      noteItemName: nItem ? nItem.name : '',
      noteChips: noteChips,
      noteDraft: draft,
      noteHasSaved: !!(nItem && (st.notes[nItem.id] || '').trim()),
      setNoteDraft: (e) => this.setState({ noteDraft: String(e.target.value).slice(0, 200) }),
      saveNote: () => {
        const nn = Object.assign({}, this.state.notes); const v = (this.state.noteDraft || '').trim();
        if (v) nn[st.noteFor] = v; else delete nn[st.noteFor];
        this.setState({ notes: nn, noteFor: null, noteDraft: '' });
      },
      clearNote: () => { const nn = Object.assign({}, this.state.notes); delete nn[st.noteFor]; this.setState({ notes: nn, noteFor: null, noteDraft: '' }); },
      closeNote: () => this.setState({ noteFor: null, noteDraft: '' }),
      zoomOpen: !!zo,
      z: zo || { name: '', caption: '', tile: '#EEE0C4', hasDiet: false, dietColor: '#2E7D32', locked: false, hasPhoto: false, noPhoto: true, photo: '' },
      closeZoom: () => this.setState({ zoom: null }),
      zPick: () => { if (zo) { zo.pick(); this.setState({ zoom: null }); } },
      zBtnLabel: zLabel,
      zBtnBg: zo && zo.on ? '#FFFFFF' : '#0E3B33',
      zBtnColor: zo && zo.on ? '#0E3B33' : '#FBF6EA',
      zBtnOpacity: zo && zo.locked ? 0.45 : 1,
      showRate: isCustom,
      rateText: (() => { const c = this.catRates(); const t = st.tab; const k = { starters: ['starter', c.starters], mains: ['main course dish', c.mains], staples: ['staple', c.staples], dessert: ['dessert', c.dessert] }[t]; return 'Each ' + k[0] + ' adds ' + k[1] + ' Dh / person'; })(),
      custTotal: custTotal,
      custPP: custPP,
      custSub: custSub,
      custSubColor: custSubColor,
      iNotReady: !ready,
      iBtnOpacity: ready ? 1 : 0.45
    };
  }

  // ---------- everything the theme, review and PDF screens need ----------
  summary() {
    const st = this.state;
    const MIN = 2000;
    const fmt = (n) => n.toLocaleString('en-US');
    const setup = st.type === 'delivery' ? 'delivery' : (st.layout === 'live' ? 'live' : 'buffet');
    const P = this.PRICES[st.cuisine][setup];
    const cuisine = { ic: 'Indian & Chinese', in: 'Indian', ch: 'Chinese' }[st.cuisine];
    const isCustom = st.pkg === 'custom', hasPkg = typeof st.pkg === 'number';
    const g = { starters: [], mains: [], staples: [], dessert: [] };
    this.ITEMS.forEach((x) => {
      if (!st.sel[x.id]) return;
      const k = x.cat === 'starter' ? 'starters' : x.cat === 'main' ? 'mains' : x.cat === 'dessert' ? 'dessert' : 'staples';
      const note = (st.notes[x.id] || '').trim();
      g[k].push({ name: x.name, note: note, hasNote: !!note });
    });
    const groups = [['Starters', g.starters], ['Main course', g.mains], ['Staples', g.staples], ['Dessert', g.dessert]].filter((a) => a[1].length).map((a) => ({ title: a[0] + ' (' + a[1].length + ')', items: a[1] }));
    let pp = 0;
    if (hasPkg) pp = P[st.pkg];
    else if (isCustom) pp = this.customPP({ starters: g.starters.length, mains: g.mains.length, staples: g.staples.length, dessert: g.dessert.length });
    const raw = pp * st.pax;
    const menuTotal = pp > 0 ? Math.max(raw, MIN) : 0;
    const th = this.THEMES.find((t) => t.id === st.theme) || null;
    const themePrice = th ? th.price : 0;
    const grand = menuTotal + themePrice;
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dateText = 'Not provided';
    const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(st.date || '');
    if (dm) dateText = parseInt(dm[3], 10) + ' ' + MON[parseInt(dm[2], 10) - 1] + ' ' + dm[1];
    const when = dateText + (st.time ? ', ' + st.time : '');
    return {
      ref: this.REF, fmt: fmt,
      name: (st.name || '').trim() || 'Not provided',
      contact: (st.phone || '').trim() ? st.cc + ' ' + st.phone.trim() : 'Not provided',
      emirate: st.emirate || 'Not selected',
      when: when, pax: String(st.pax), veg: st.pureVeg ? 'Yes' : 'No',
      typeLabel: st.type === 'delivery' ? 'Delivery' : (st.type === 'onsite' ? 'Onsite Catering' : 'Not selected'),
      layoutLabel: st.layout === 'live' ? 'Live Cooking Station' : (st.layout === 'buffet' ? 'Buffet' : 'Not selected'),
      venueLabel: st.venue === 'indoor' ? 'Indoor' : (st.venue === 'outdoor' ? 'Outdoor' : 'Not selected'),
      isOnsite: st.type === 'onsite',
      pkgLabel: isCustom ? 'Custom menu' : (hasPkg ? 'Package ' + (st.pkg + 1) : 'Not selected'),
      cuisine: cuisine + (st.pureVeg ? ' (Pure Veg)' : ''),
      ppText: pp > 0 ? pp + ' Dh' : '-',
      groups: groups,
      themeLabel: th ? th.name + (th.price ? ' (+ ' + fmt(th.price) + ' Dh)' : ' (Free)') : 'No theme',
      notesText: (st.eventNote || '').trim() || 'None',
      menuRowLabel: pp > 0 ? 'Menu: ' + st.pax + ' guests x ' + pp + ' Dh' : 'Menu',
      menuRowValue: pp > 0 ? fmt(raw) + ' Dh' : '-',
      showMin: pp > 0 && raw < MIN,
      minValue: '+ ' + fmt(Math.max(MIN - raw, 0)) + ' Dh',
      themeRowLabel: th ? 'Theme: ' + th.name : 'Theme',
      themeRowValue: th ? (th.price ? '+ ' + fmt(th.price) + ' Dh' : 'Free') : 'None',
      grand: fmt(grand) + ' Dh', grandNum: grand, menuTotal: menuTotal, themePrice: themePrice, th: th
    };
  }
  buildPdf() {
    const S = this.summary();
    const W1 = [278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584], W2 = [278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584];
    const wOf = (t, size, bold) => { const tb = bold ? W2 : W1; let w = 0; for (let i = 0; i < t.length; i++) { const c = t.charCodeAt(i) - 32; w += (c >= 0 && c < 95 ? tb[c] : 556); } return w * size / 1000; };
    const clean = (t) => String(t == null ? '' : t).replace(/[\u00b7\u2022]/g, '-').replace(/\u00d7/g, 'x').replace(/[\u2013\u2014]/g, '-').replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\r\t]/g, ' ').replace(/[^\x20-\x7E\n]/g, '');
    const esc = (t) => t.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    const PW = 595, PH = 842, M = 40, CW = PW - 2 * M;
    const pages = []; let ops = [], y = 0;
    const col = (hex) => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => (v / 255).toFixed(3)).join(' '); };
    const rect = (x, yt, w, h, hex) => ops.push(col(hex) + ' rg ' + x.toFixed(1) + ' ' + (PH - yt - h).toFixed(1) + ' ' + w.toFixed(1) + ' ' + h.toFixed(1) + ' re f');
    const text = (x, yb, t, size, bold, hex) => ops.push('BT /' + (bold ? 'F2' : 'F1') + ' ' + size + ' Tf ' + col(hex) + ' rg ' + x.toFixed(1) + ' ' + (PH - yb).toFixed(1) + ' Td (' + esc(clean(t)) + ') Tj ET');
    const rtext = (xr, yb, t, size, bold, hex) => text(xr - wOf(clean(t), size, bold), yb, t, size, bold, hex);
    const wrap = (t, maxW, size, bold) => {
      const out = [];
      clean(t).split('\n').forEach((para) => {
        let line = '';
        para.split(' ').forEach((w) => {
          const tryLine = line ? line + ' ' + w : w;
          if (wOf(tryLine, size, bold) <= maxW || !line) line = tryLine; else { out.push(line); line = w; }
        });
        out.push(line);
      });
      return out;
    };
    const newPage = () => { if (ops.length) pages.push(ops); ops = []; rect(0, 0, PW, 6, '#0E3B33'); y = 40; };
    const ensure = (h) => { if (y + h > PH - 50) newPage(); };
    // header band (first page)
    rect(0, 0, PW, 96, '#0E3B33'); rect(0, 96, PW, 3, '#C9963B');
    text(M, 46, 'Build your Menu!', 26, true, '#FBF6EA');
    text(M, 68, 'CATERING ORDER SUMMARY', 10.5, true, '#E9C77E');
    rtext(PW - M, 46, 'Ref: ' + S.ref, 12, true, '#FBF6EA');
    const dn = new Date();
    rtext(PW - M, 66, 'Generated ' + dn.getDate() + '/' + (dn.getMonth() + 1) + '/' + dn.getFullYear(), 10, false, '#C9D6D1');
    y = 122;
    const section = (title) => { ensure(48); text(M, y + 10, title.toUpperCase(), 11, true, '#0E3B33'); rect(M, y + 16, CW, 1.4, '#C9963B'); y += 30; };
    const kv = (k, v) => {
      const lines = wrap(v, CW - 130, 11, true);
      ensure(lines.length * 15 + 4);
      text(M, y, k, 11, false, '#5A6863');
      lines.forEach((l, i) => text(M + 130, y + i * 15, l, 11, true, '#1B2B27'));
      y += lines.length * 15 + 4;
    };
    section('Customer details');
    kv('Name', S.name); kv('Contact', S.contact); kv('Emirates', S.emirate); kv('Event date & time', S.when); kv('Guests', S.pax); kv('Pure Veg', S.veg);
    y += 8; section('Setup');
    kv('Catering type', S.typeLabel);
    if (S.isOnsite) { kv('Layout', S.layoutLabel); kv('Venue', S.venueLabel); }
    y += 8; section('Menu');
    kv('Selection', S.pkgLabel); kv('Cuisine', S.cuisine); kv('Price per person', S.ppText);
    y += 4;
    S.groups.forEach((gr) => {
      ensure(34); text(M, y + 4, gr.title, 11.5, true, '#0E3B33'); y += 20;
      gr.items.forEach((d) => {
        const l1 = wrap(d.name, CW - 24, 11, false);
        const ln = d.hasNote ? wrap('Note: ' + d.note, CW - 34, 10, true) : [];
        ensure(l1.length * 14 + ln.length * 13 + 4);
        rect(M + 4, y - 7.5, 3.5, 3.5, '#C9963B');
        l1.forEach((l, i) => text(M + 16, y + i * 14, l, 11, false, '#1B2B27'));
        y += l1.length * 14;
        ln.forEach((l, i) => text(M + 26, y + i * 13, l, 10, true, '#8A5A00'));
        y += ln.length * 13 + 3;
      });
      y += 6;
    });
    y += 4; section('Theme & notes');
    kv('Theme', S.themeLabel); kv('Notes', S.notesText);
    y += 8; ensure(150);
    section('Price summary');
    const row = (a, b, bold, hex) => { ensure(20); text(M, y, a, 11, bold, hex || '#1B2B27'); rtext(PW - M, y, b, 11, bold, hex || '#1B2B27'); y += 19; };
    row(S.menuRowLabel, S.menuRowValue, false);
    if (S.showMin) row('Minimum order top-up', S.minValue, false, '#8A5A00');
    row(S.themeRowLabel, S.themeRowValue, false);
    y += 4; ensure(50);
    rect(M, y, CW, 38, '#EADFC8');
    text(M + 12, y + 24, 'APPROX. TOTAL', 11, true, '#4A5A55');
    rtext(PW - M - 12, y + 26, S.grand, 17, true, '#0E3B33');
    y += 52; ensure(40);
    wrap('This is an approximate price. The final quote is confirmed by our team after review.', CW, 9.5, false).forEach((l, i) => text(M, y + i * 12, l, 9.5, false, '#5A6863'));
    if (ops.length) pages.push(ops);
    const total = pages.length;
    pages.forEach((p, i) => {
      const save = ops; ops = p;
      rect(M, PH - 40, CW, 0.8, '#DDD3BF');
      text(M, PH - 26, 'Build your Menu! - Ref ' + S.ref, 9, false, '#5A6863');
      rtext(PW - M, PH - 26, 'Page ' + (i + 1) + ' of ' + total, 9, false, '#5A6863');
      ops = save;
    });
    let out = '%PDF-1.4\n'; const offs = [];
    const add = (body) => { offs.push(out.length); out += offs.length + ' 0 obj\n' + body + '\nendobj\n'; };
    add('<< /Type /Catalog /Pages 2 0 R >>');
    add('<< /Type /Pages /Kids [' + pages.map((_, i) => (6 + i * 2) + ' 0 R').join(' ') + '] /Count ' + total + ' >>');
    add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    pages.forEach((p, i) => {
      const body = p.join('\n');
      add('<< /Length ' + body.length + ' >>\nstream\n' + body + '\nendstream');
      add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + PW + ' ' + PH + '] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ' + (5 + i * 2) + ' 0 R >>');
    });
    const xr = out.length;
    out += 'xref\n0 ' + (offs.length + 1) + '\n0000000000 65535 f \n' + offs.map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join('');
    out += 'trailer\n<< /Size ' + (offs.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xr + '\n%%EOF';
    const u8 = new Uint8Array(out.length);
    for (let i = 0; i < out.length; i++) u8[i] = out.charCodeAt(i) & 255;
    return new Blob([u8], { type: 'application/pdf' });
  }
  async downloadPdf() {
    const filename = 'Catering-Order-' + this.REF + '.pdf';
    let blob;
    try { blob = this.buildPdf(); } catch (e) { this.setState({ pdfMsg: 'Could not create the PDF. Please try again.' }); return; }
    this.setState({ pdfMsg: 'Confirming and preparing your PDF...' });
    let dl = null;
    try { dl = (window.claude && window.claude.use) ? await window.claude.use('downloads') : null; } catch (e) { dl = null; }
    try {
      if (dl) {
        await dl.save({ filename: filename, data: blob });
        this.setState({ screen: 'thanks', pdfMsg: '' });
      } else {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = filename;
        document.body.appendChild(a); a.click(); a.remove();
        this.setState({ screen: 'thanks', pdfMsg: '' });
      }
    } catch (e) {
      this.setState({ pdfMsg: (e && e.code === 'declined') ? 'Not confirmed yet - download was cancelled' : 'Download was blocked here. Please open the link in your browser and try again.' });
    }
  }
  didRender() {
    const target = this._scrollTo;
    if (!target) return;
    this._scrollTo = null;
    const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (target === 'itemsTop') {
      const list = document.querySelector('[data-anchor="items-list"]');
      if (list) list.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
      return;
    }
    const el = document.querySelector('[data-anchor="' + target + '"]');
    if (!el) return;
    el.scrollIntoView({ block: 'nearest', behavior: calm ? 'auto' : 'smooth' });
  }
  renderVals() {
    const st = this.state;
    const screen = st.screen || this.props.start || 'details';
    const isOnsite = st.type === 'onsite';
    const sReady = st.type === 'delivery' || (isOnsite && !!st.layout && !!st.venue);
    const opt = (on, pick) => ({
      on: on, pick: pick,
      border: on ? '#C9963B' : '#E4D9C2',
      shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)'
    });
    const pvOpt = (on, val) => ({
      on: on,
      pick: () => this.setState({ pureVeg: val }),
      bg: on ? '#0E3B33' : '#FFFFFF',
      color: on ? '#FBF6EA' : '#0E3B33',
      border: on ? '#0E3B33' : '#DDD3BF'
    });
    const pax = st.pax;
    const ret = st.returnTo;
    const go = (scr, clearRet, setRet) => this.setState({ screen: scr, returnTo: setRet ? 'review' : (clearRet && scr === 'review' ? null : st.returnTo), pdfMsg: '' });
    const openItems = (fromReview) => {
      const key = st.cuisine + '|' + st.pkg + '|' + (st.pureVeg ? 'pv' : 'all');
      this.setState({ screen: 'items', minWarn: false, returnTo: fromReview ? 'review' : st.returnTo, tab: 'starters', fcu: 'all', sub: 0, note: '', sel: st.selKey === key ? st.sel : {}, notes: st.selKey === key ? st.notes : {}, noteFor: null, zoom: null, selKey: key });
    };
    const S = this.summary();
    const themes = this.THEMES.map((t) => {
      const on = st.theme === t.id, free = t.price === 0;
      return {
        name: t.name, desc: t.desc, c1: t.c[0], c2: t.c[1], c3: t.c[2], c4: t.c[3],
        k1: t.id === 't1', k2: t.id === 't2', k3: t.id === 't3', k4: t.id === 't4', k5: t.id === 't5', k6: t.id === 't6',
        tag: free ? 'FREE' : 'PREMIUM', tagBg: free ? '#D3E7DE' : '#C9963B', tagColor: '#0E3B33',
        priceText: free ? 'Free' : '+ ' + S.fmt(t.price) + ' Dh',
        priceColor: free ? '#1F6B4E' : '#8A5A00',
        on: on, border: on ? '#C9963B' : '#E4D9C2',
        shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)',
        pick: () => this.setState({ theme: on ? null : t.id }),
        open: () => this.setState({ screen: 'themeDetail', themeView: t.id })
      };
    });
    const dt = this.THEMES.find((t) => t.id === st.themeView) || this.THEMES[3];
    const di = this.THEME_INFO[dt.id];
    const dOn = st.theme === dt.id, dFree = dt.price === 0;
    const dObj = {
      name: dt.name, c1: dt.c[0], c2: dt.c[1], c3: dt.c[2], c4: dt.c[3],
      k1: dt.id === 't1', k2: dt.id === 't2', k3: dt.id === 't3', k4: dt.id === 't4', k5: dt.id === 't5', k6: dt.id === 't6',
      tag: dFree ? 'FREE WITH PACKAGE' : 'PREMIUM', tagBg: dFree ? '#D3E7DE' : '#C9963B', tagColor: '#0E3B33',
      priceLong: dFree ? 'Free with your package' : '+ ' + S.fmt(dt.price) + ' Dh per event',
      priceColor: dFree ? '#1F6B4E' : '#8A5A00',
      priceNote: dFree ? 'Included with your package at no extra charge.' : 'Premium theme: a flat charge per event, added to your approx. total. Final price is confirmed by our team.',
      long: di.long, incl: di.incl.map((x) => ({ text: x })), best: di.best.map((x) => ({ text: x })),
      btnLabel: dOn ? 'Selected - tap to remove' : (dFree ? 'Select this theme' : 'Select theme · + ' + S.fmt(dt.price) + ' Dh'),
      btnBg: dOn ? '#FFFFFF' : '#0E3B33', btnColor: dOn ? '#0E3B33' : '#FBF6EA', btnBorder: dOn ? '1.5px solid #0E3B33' : 'none',
      choose: () => this.setState({ theme: dOn ? null : dt.id, screen: 'theme' })
    };
    return Object.assign({
      isDetails: screen === 'details',
      isSetup: screen === 'setup',
      isPkgScreen: screen === 'pkg',
      isItemsScreen: screen === 'items',
      isThemeScreen: screen === 'theme',
      isReviewScreen: screen === 'review',
      isThanks: screen === 'thanks',
      thanksTitle: (st.name || '').trim() ? 'Thank you, ' + st.name.trim().split(/\s+/)[0] + '!' : 'Thank you!',
      backToReview: () => this.setState({ screen: 'review', pdfMsg: '' }),
      // navigation: while editing from the review page, every "Save & Next" / Back returns there
      nextFromDetails: () => {
        const missing = [];
        if (!(st.name || '').trim()) missing.push('name');
        if (!(st.phone || '').trim()) missing.push('contact number');
        if (!st.date) missing.push('event date');
        if (!(st.pax > 0)) missing.push('number of guests');
        if (missing.length) { this.setState({ detailsWarn: true }); return; }
        go(ret ? 'review' : 'setup', true);
      },
      backSetup: () => go(ret ? 'review' : 'details', true),
      nextFromSetup: () => go(ret ? 'review' : 'pkg', true),
      backPkg: () => go(ret ? 'review' : 'setup', true),
      nextFromPkg: () => {
        if (this.pkgVals().belowMin && !st.consent) { this.setState({ minWarn: true }); return; }
        openItems();
      },
      backItems: () => go(ret ? 'review' : 'pkg', true),
      nextFromItems: () => {
        if (this.itemsVals().custBelowMin && !st.custMinOk) { this.setState({ minWarn: true }); return; }
        go(ret ? 'review' : 'theme', true);
      },
      backTheme: () => go(ret ? 'review' : 'items', true),
      nextFromTheme: () => go('review', true),
      backReview: () => go('theme', true),
      editDetails: () => go('details', false, true),
      editSetup: () => go('setup', false, true),
      editPkg: () => go('pkg', false, true),
      editItems: () => openItems(true),
      editTheme: () => go('theme', false, true),
      themes: themes,
      d: dObj,
      isThemeDetail: screen === 'themeDetail',
      closeThemeDetail: () => this.setState({ screen: 'theme' }),
      eventNote: st.eventNote,
      setEventNote: (e) => this.setState({ eventNote: String(e.target.value).slice(0, 500) }),
      themeSumText: S.th ? S.th.name + (S.th.price ? ' · + ' + S.fmt(S.th.price) + ' Dh' : ' · Free') : 'None selected',
      grandText: S.grandNum > 0 ? S.grand : '-',
      rv: S,
      hasPdfMsg: !!st.pdfMsg,
      pdfMsg: st.pdfMsg,
      downloadPdf: () => this.downloadPdf(),
      // details
      name: st.name, cc: st.cc, phone: st.phone, emirate: st.emirate, date: st.date, time: st.time,
      dWarn: !!st.detailsWarn,
      dNameBorder:  (st.detailsWarn && !(st.name || '').trim()) ? '#B3261E' : '#DDD3BF',
      dPhoneBorder: (st.detailsWarn && !(st.phone || '').trim()) ? '#B3261E' : '#DDD3BF',
      dDateBorder:  (st.detailsWarn && !st.date) ? '#B3261E' : '#DDD3BF',
      dWarnText: (() => {
        const m = [];
        if (!(st.name || '').trim()) m.push('name');
        if (!(st.phone || '').trim()) m.push('contact number');
        if (!st.date) m.push('event date');
        if (!(st.pax > 0)) m.push('guests');
        if (!m.length) return '';
        return 'Please add your ' + (m.length === 1 ? m[0] : m.slice(0, -1).join(', ') + ' and ' + m[m.length - 1]) + '.';
      })(),
      dWarnShown: !!st.detailsWarn && !!((!(st.name || '').trim()) || (!(st.phone || '').trim()) || !st.date || !(st.pax > 0)),
      dConsentShown: !(!!st.detailsWarn && !!((!(st.name || '').trim()) || (!(st.phone || '').trim()) || !st.date || !(st.pax > 0))),
      setName: (e) => this.setState({ name: e.target.value }),
      setCc: (e) => this.setState({ cc: e.target.value }),
      setPhone: (e) => this.setState({ phone: e.target.value }),
      setEmirate: (e) => this.setState({ emirate: e.target.value }),
      setDate: (e) => this.setState({ date: e.target.value }),
      dateEmpty: !st.date,
      setTime: (e) => this.setState({ time: e.target.value }),
      paxText: st.paxEdit !== null ? st.paxEdit : String(pax),
      typePax: (e) => {
        const d = String(e.target.value).replace(/[^0-9]/g, '').slice(0, 4);
        const n = parseInt(d, 10);
        this.setState({ paxEdit: d, pax: n > 0 ? Math.min(n, 5000) : pax, consent: false });
      },
      blurPax: () => this.setState({ paxEdit: null }),
      incPax: () => this.setState({ pax: Math.min(pax + 1, 5000), paxEdit: null, consent: false, minWarn: false }),
      decPax: () => this.setState({ pax: Math.max(pax - 1, 1), paxEdit: null, consent: false, minWarn: false }),
      pvYes: pvOpt(st.pureVeg, true),
      pvNo: pvOpt(!st.pureVeg, false),
      // setup
      isOnsite: isOnsite,
      showVenue: isOnsite && !!st.layout,
      sReady: sReady,
      sNotReady: !sReady,
      delivery: opt(st.type === 'delivery', () => this.setState({ type: 'delivery', layout: null, venue: null, consent: false })),
      onsite: opt(isOnsite, () => { this._scrollTo = 'layout'; this.setState({ type: 'onsite', consent: false }); }),
      buffet: opt(st.layout === 'buffet', () => { this._scrollTo = 'venue'; this.setState({ layout: 'buffet', consent: false }); }),
      live: opt(st.layout === 'live', () => { this._scrollTo = 'venue'; this.setState({ layout: 'live', consent: false }); }),
      indoor: opt(st.venue === 'indoor', () => this.setState({ venue: 'indoor' })),
      outdoor: opt(st.venue === 'outdoor', () => this.setState({ venue: 'outdoor' }))
    }, this.pkgVals(), this.itemsVals());
  }
}

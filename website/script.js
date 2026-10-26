const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('.filters').addEventListener('click', event => {
  const button = event.target.closest('.filter');
  if (!button) return;
  document.querySelector('.filter.active')?.classList.remove('active');
  button.classList.add('active');
  applyProductFilters();
});
document.getElementById('product-search').addEventListener('input', applyProductFilters);
document.getElementById('clear-search').addEventListener('click', () => {
  document.getElementById('product-search').value = '';
  applyProductFilters();
  document.getElementById('product-search').focus();
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const heroSlides = [
  { kicker: 'MATERIALS THAT MAKE A DIFFERENCE', title: 'Built to last.<br><em>Made to protect.</em>', description: 'Thoughtful building chemical solutions for stronger structures, reliable finishes and lasting peace of mind.' },
  { kicker: 'THE RIGHT PRODUCT FOR THE JOB', title: 'Every layer.<br><em>Considered.</em>', description: 'Explore practical product ideas for waterproofing, concrete care, tile and finishing work.' },
  { kicker: 'HERE FOR YOUR NEXT PROJECT', title: 'Build with<br><em>confidence.</em>', description: 'Based in Ramadi, EBC is ready to help you find a good starting point for your building needs.' }
];
const heroSlidesArabic = [
  { kicker: 'مواد تصنع فرقاً', title: 'بناء يدوم.<br><em>وحماية تثق بها.</em>', description: 'حلول عملية لكيماويات البناء، لمبانٍ أقوى وتشطيبات موثوقة وحماية تدوم.' },
  { kicker: 'المنتج المناسب للعمل', title: 'كل مرحلة<br><em>لها حلها.</em>', description: 'اكتشف أفكاراً عملية لمنتجات العزل المائي ومعالجة الخرسانة والبلاط والتشطيبات.' },
  { kicker: 'معك في مشروعك القادم', title: 'ابنِ<br><em>بثقة.</em>', description: 'من الرمادي، تساعدك EBC في العثور على بداية مناسبة لاحتياجات البناء.' }
];
const slideDots = [...document.querySelectorAll('.slide-dot')];
let currentSlide = 0;
function showSlide(index) {
  currentSlide = index;
  const slide = document.documentElement.lang === 'ar' ? heroSlidesArabic[index] : heroSlides[index];
  document.getElementById('slide-number').textContent = String(index + 1).padStart(2, '0');
  document.getElementById('slide-kicker').textContent = slide.kicker;
  document.getElementById('slide-title').innerHTML = slide.title;
  document.getElementById('slide-description').textContent = slide.description;
  document.getElementById('hero-current').textContent = String(index + 1).padStart(2, '0');
  slideDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}
slideDots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setInterval(() => showSlide((currentSlide + 1) % heroSlides.length), 6000);
}

document.getElementById('year').textContent = new Date().getFullYear();

// Add your EBC email address before publishing, for example: const EBC_EMAIL = 'info@example.com';
const EBC_EMAIL = '';
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const result = document.querySelector('.form-result');
  if (!EBC_EMAIL) {
    result.textContent = document.documentElement.lang === 'ar' ? 'أضف بريد EBC في ملف script.js لتفعيل الاستفسارات.' : 'Add your EBC email in script.js to activate enquiries.';
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`EBC website enquiry — ${data.get('interest')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nInterest: ${data.get('interest')}\n\n${data.get('message') || ''}`);
  window.location.href = `mailto:${EBC_EMAIL}?subject=${subject}&body=${body}`;
});

document.querySelector('.play-button').addEventListener('click', () => {
  document.querySelector('.form-result').textContent = document.documentElement.lang === 'ar' ? 'أضف رابط فيديو شرح المنتج هنا عند توفره.' : 'Add your product tutorial video link to this spotlight when it is ready.';
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.play-button').addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.currentTarget.click();
  }
});

const products = [
  { name:'OXISEAL WR DELUXE', file:'oxiseal-delux.jpg', category:'waterproofing', typeEn:'Stone sealer', typeAr:'عازل للحجر', size:'20 L', en:'Water-repellent, penetrating sealer for porous substrates, including sandstone and clay stone.', ar:'مادة عازلة طاردة للماء تتغلغل في الأسطح المسامية، ومنها الحجر الرملي والطين الحجري.', detailsEn:['Al Majara lists Oxiseal WR Deluxe for porous substrates','Suitable substrate and appearance depend on the exact system; check the current product data sheet'], detailsAr:['تدرج المجرة منتج Oxiseal WR Deluxe للأسطح المسامية','تُراجع ورقة البيانات الفنية للتأكد من نوع السطح والمظهر النهائي'], source:'https://oxichemicals.com/products/stone-sealer/natural-repellant-sealers/' },
  { name:'OXIPROOF AR', file:'oxiproof-ar.jpg', category:'waterproofing', typeEn:'Acrylic waterproofing', typeAr:'عزل أكريليكي', size:'20 L', en:'Elastomeric acrylic waterproofing and protective coating for roofs, wet areas, bridge decks and other concrete surfaces.', ar:'طلاء أكريليكي مرن للعزل المائي والحماية، للأسطح ومناطق البلل وجسور الخرسانة وغيرها من الأسطح الخرسانية.', detailsEn:['Al Majara lists use on sloped concrete and metal roofs, wet areas, underpasses and bridge decks','Acrylic membrane type and substrate preparation are specified in the product data sheet'], detailsAr:['تذكر المجرة الأسطح الخرسانية والمعدنية المائلة ومناطق البلل والأنفاق السفلية وجسور الخرسانة','يوضح دليل المنتج نوع الغشاء وتهيئة السطح'], source:'https://oxichemicals.com/products/waterproofing/acrylic-waterproofing/' },
  { name:'OXIFLOOR FC200', file:'oxifloor-fc200.jpg', category:'finishes', typeEn:'Epoxy flooring', typeAr:'أرضيات إيبوكسية', size:'18 L', sizes:['18 L'], colors:[{name:'Light grey',ar:'رمادي فاتح',hex:'#c5c7c4'},{name:'Mid grey',ar:'رمادي متوسط',hex:'#888d8b'},{name:'Charcoal',ar:'فحمي',hex:'#454a4b'}], colorNoteEn:'Color swatches are request preferences only; confirm the available shade with EBC.', colorNoteAr:'الألوان المعروضة تفضيلات للطلب فقط؛ يرجى تأكيد الدرجة المتاحة مع EBC.', en:'Solvent-free epoxy floor coating designed for durable, chemical- and abrasion-resistant floors in industrial and wet areas.', ar:'طلاء أرضيات إيبوكسي خالٍ من المذيبات، مصمم لأرضيات متينة ومقاومة للمواد الكيميائية والاحتكاك في المناطق الصناعية والرطبة.', detailsEn:['Uses include warehouses, dairies, soft-drink production, chemical plants, car parks and workshops','Two-component system; anti-slip texture can be specified. Consult Al Majara’s data sheet for application and cure times'], detailsAr:['تشمل الاستخدامات المخازن والألبان ومصانع المشروبات والمنشآت الكيميائية ومواقف السيارات والورش','نظام من مكونين، ويمكن تحديد ملمس مقاوم للانزلاق. راجع ورقة المجرة لطريقة التطبيق وأوقات التصلب'], source:'https://oxichemicals.com/wp-content/uploads/2020/12/Oxifloor-FC200-F.pdf' },
  { name:'OXIROCK HS', file:'oxirock-hs.jpg', category:'concrete', typeEn:'Structural repair', typeAr:'إصلاح إنشائي', size:'25 kg', en:'Shrinkage-compensated, polymer-modified, fibre-reinforced thixotropic repair mortar for trowel or wet-spray structural repairs.', ar:'مونة إصلاح ثيكسوتروبية مسلحة بالألياف ومعدلة بالبوليمر ومعوضة للانكماش، للإصلاح الإنشائي بالمالج أو الرش الرطب.', detailsEn:['Al Majara lists repairs to reinforced and prestressed beams and columns, loaded areas and marine environments','Wet-spray or trowel application; follow the manufacturer’s current data sheet'], detailsAr:['تذكر المجرة إصلاح الكمرات والأعمدة المسلحة أو سابقة الإجهاد والمناطق المعرضة للأحمال والبيئات البحرية','تُطبق بالرش الرطب أو المالج وفق ورقة البيانات الفنية الحالية'], source:'https://oxichemicals.com/products/cementitious-repairs/structural-repairing/' },
  { name:'OXIPROOF HB', file:'oxiproof-hb.jpg', category:'waterproofing', typeEn:'High-build acrylic waterproofing', typeAr:'عزل أكريليكي عالي السماكة', size:'25 kg', en:'Water-based, single-component high-build acrylic waterproofing membrane with elongation, recovery, thermal insulation and UV protection.', ar:'غشاء عزل أكريليكي مائي أحادي المكون وعالي السماكة، يتميز بالاستطالة والاستعادة والعزل الحراري والحماية من الأشعة فوق البنفسجية.', detailsEn:['Al Majara lists roofs, balconies, wet areas, under-tile applications and concrete bridge decks','The supplied poster heading says HB; the bucket label appears to say HP. Please confirm the exact code before publishing'], detailsAr:['تذكر المجرة الأسطح والشرفات ومناطق البلل والتطبيق تحت البلاط وجسور الخرسانة','عنوان الملصق HB بينما يبدو أن رمز العبوة HP؛ يرجى تأكيد الرمز قبل النشر'], source:'https://oxichemicals.com/products/waterproofing/acrylic-waterproofing/' },
  { name:'DASH BOND', file:'dash-bond.jpg', category:'concrete', typeEn:'Concrete preparation', typeAr:'تجهيز الخرسانة', size:'50 kg', en:'Ready-mixed, water-resistant spatter dash coat for preparing interior and exterior concrete surfaces, as described in the supplied poster.', ar:'طبقة طرطشة جاهزة ومقاومة للماء لتهيئة الأسطح الخرسانية الداخلية والخارجية، وفق وصف الملصق المرفق.', detailsEn:['The supplied poster states approximate coverage of 20 m² per 50 kg bag','Brand shown on the poster: Monneli Colmef; this is not listed as an Al Majara OXI product'], detailsAr:['يذكر الملصق المرفق تغطية تقريبية قدرها 20 م² للكيس 50 كغم','العلامة الظاهرة في الملصق: Monneli Colmef؛ وليس منتجاً من مجموعة OXI التابعة للمجرة'] },
  { name:'FIBERGLASS MESH TAPE', file:'fiberglass-mesh-tape.jpg', category:'waterproofing', typeEn:'Reinforcement tape', typeAr:'شريط تسليح', size:'12 cm × 50 m', en:'Fiberglass mesh tape presented in the supplied poster for reinforcement in waterproofing systems with liquid membranes and coatings.', ar:'شريط شبك من الألياف الزجاجية يظهر في الملصق المرفق لتسليح أنظمة العزل المائي بالأغشية والطلاءات السائلة.', detailsEn:['Poster lists 12 cm × 50 m and use on roofs, bathrooms and tanks','Confirm the tape specification and compatibility with the selected waterproofing system'], detailsAr:['يذكر الملصق مقاس 12 سم × 50 م واستخدامه للأسطح والحمامات والخزانات','يُرجى التأكد من مواصفات الشريط وتوافقه مع نظام العزل المختار'] },
  { name:'OXIROCK FF', file:'oxirock-ff.jpg', category:'concrete', typeEn:'Concrete fairing coat', typeAr:'مونة تنعيم الخرسانة', size:'20 kg', en:'Single-component, polymer-modified cementitious pinhole filler for concrete and masonry imperfections, up to 5 mm thick.', ar:'مادة إسمنتية أحادية المكون ومعدلة بالبوليمر لملء ثقوب وعيوب الخرسانة والمباني بسماكة تصل إلى 5 ملم.', detailsEn:['Used to fill blow holes before overcoating, skim-coat concrete or reprofile larger areas','Al Majara identifies this as Oxirock FF; verify the package size against the current product sheet'], detailsAr:['تستخدم لملء الفجوات قبل الطلاء أو تنعيم الخرسانة أو إعادة تشكيل المساحات الأكبر','تسمي المجرة المنتج Oxirock FF؛ تحقق من حجم العبوة وفق ورقة المنتج الحالية'], source:'https://oxichemicals.com/products/cementitious-repairs/fair-faced-repairing/' }
];

function normalizeSearch(value) {
  return value.toLocaleLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').trim();
}
function applyProductFilters() {
  const query = normalizeSearch(document.getElementById('product-search').value);
  const category = document.querySelector('.filter.active')?.dataset.filter || 'all';
  const cards = [...document.querySelectorAll('.product-card')];
  let visible = 0;
  cards.forEach(card => {
    const categoryMatches = category === 'all' || card.dataset.category === category;
    const textMatches = !query || normalizeSearch(card.textContent).includes(query);
    const show = categoryMatches && textMatches;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  const arabic = document.documentElement.lang === 'ar';
  document.getElementById('product-result-count').textContent = arabic ? `${visible} منتجات` : `${visible} ${visible === 1 ? 'product' : 'products'}`;
  const noResults = document.getElementById('no-results');
  noResults.hidden = visible > 0;
  noResults.textContent = arabic ? 'لا توجد منتجات تطابق بحثك.' : 'No products match your search.';
}

function renderProducts(language) {
  const arabic = language === 'ar';
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = products.map((product, index) => {
    const type = arabic ? product.typeAr : product.typeEn;
    const description = arabic ? product.ar : product.en;
    const details = arabic ? product.detailsAr : product.detailsEn;
    const sizeLabel = arabic ? 'العبوة' : 'PACK SIZE';
    const detailsLabel = arabic ? 'تفاصيل المنتج' : 'Product details';
    const fullImageLabel = arabic ? `عرض ملصق ${product.name}` : `View ${product.name} product poster`;
    const colors = product.colors || [];
    const sizes = product.sizes || (product.size ? [product.size] : []);
    const colorOptions = colors.length ? `<div class="product-colors" role="group" aria-label="${arabic ? 'اختر اللون' : 'Select color'}">${colors.map((color, colorIndex) => `<button type="button" class="color-swatch${colorIndex === 0 ? ' selected' : ''}" data-option-color="${colorIndex}" title="${arabic ? color.ar : color.name}" aria-label="${arabic ? color.ar : color.name}" style="--swatch:${color.hex}"></button>`).join('')}</div>` : '';
    const sizeOptions = sizes.length ? `<div class="product-sizes" role="group" aria-label="${arabic ? 'اختر الحجم' : 'Select size'}">${sizes.map((size, sizeIndex) => sizes.length > 1 ? `<button type="button" class="size-pill${sizeIndex === 0 ? ' selected' : ''}" data-option-size="${sizeIndex}">${size}</button>` : `<span class="size-pill selected">${size}</span>`).join('')}</div>` : '';
    const colorNote = product.colorNoteEn ? `<p class="variant-note">${arabic ? product.colorNoteAr : product.colorNoteEn}</p>` : '';
    const sourceLink = product.source ? '<a class="manufacturer-source" href="' + product.source + '" target="_blank" rel="noopener">' + (arabic ? 'معلومات الشركة المصنعة ↗' : 'Manufacturer product information ↗') + '</a>' : '';
    const selectedColor = colors.length ? 0 : -1;
    const selectedSize = sizes.length ? 0 : -1;
    return `<article class="product-card reveal" data-category="${product.category}" data-product-index="${index}" data-selected-color="${selectedColor}" data-selected-size="${selectedSize}"><div class="product-visual"><a class="product-image actual-product" href="assets/products/${product.file}" target="_blank" rel="noopener" aria-label="${fullImageLabel}"><img src="assets/products/${product.file}" alt="${product.name} — ${arabic ? 'ملصق منتج EBC' : 'EBC product poster'}" loading="lazy"><span class="product-number">${String(index + 1).padStart(2,'0')} / ${type}</span></a>${colorOptions}${sizeOptions}</div><div class="product-info product-info-cart"><div><h3>${product.name}</h3><p>${description}</p></div></div><div class="product-card-actions"><button class="product-detail-button" type="button" data-details="${index}">${arabic ? 'عرض التفاصيل' : 'View details'} <span>↗</span></button><button class="add-to-cart" type="button" data-add="${index}" aria-label="${arabic ? 'أضف إلى السلة: ' : 'Add to cart: '}${product.name}"><span>+</span> ${arabic ? 'أضف للسلة' : 'Add to request'}</button></div><details class="product-details"><summary>${detailsLabel}</summary><ul>${details.map(item => '<li>' + item + '</li>').join('')}</ul>${colorNote}${sourceLink}</details></article>`;
  }).join('');
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

const ORDER_EMAIL = '';
let cart = {};
try { cart = JSON.parse(localStorage.getItem('ebc-cart') || '{}') || {}; } catch { cart = {}; }
function renderCart(language = document.documentElement.lang) {
  const arabic = language === 'ar';
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  document.getElementById('cart-count').textContent = count;
  document.querySelector('.cart-label').textContent = arabic ? 'السلة' : 'Cart';
  const items = Object.entries(cart).map(([key, quantity]) => ({ ...readCartKey(key), quantity:Number(quantity) })).filter(item => item.quantity > 0 && products[item.index]).map(item => ({ ...item, product:products[item.index] }));
  const container = document.getElementById('cart-items');
  if (!items.length) {
    container.innerHTML = `<div class="cart-empty"><span>＋</span><p>${arabic ? 'سلتك فارغة حالياً.' : 'Your cart is empty.'}</p><small>${arabic ? 'أضف المنتجات التي ترغب بطلبها.' : 'Add products you would like to request.'}</small></div>`;
  } else {
    container.innerHTML = items.map(({ product, index, colorIndex, sizeIndex, quantity, key }) => {
      const colors = product.colors || [];
      const sizes = product.sizes || (product.size ? [product.size] : []);
      const color = colors[colorIndex];
      const size = sizes[sizeIndex] || product.size || '';
      return `<article class="cart-item"><img src="assets/products/${product.file}" alt=""><div class="cart-item-main"><h4>${product.name}</h4><small>${color ? (arabic ? 'اللون المطلوب' : 'Requested color') + ' · ' + (arabic ? color.ar : color.name) + ' · ' : ''}${arabic ? 'العبوة' : 'Pack'} · ${size}</small><div class="quantity-control"><button type="button" data-qty="-1" data-key="${key}" aria-label="${arabic ? 'تقليل الكمية' : 'Decrease quantity'}">−</button><span>${quantity}</span><button type="button" data-qty="1" data-key="${key}" aria-label="${arabic ? 'زيادة الكمية' : 'Increase quantity'}">+</button><button type="button" data-remove="${key}" class="remove-item">${arabic ? 'إزالة' : 'Remove'}</button></div></div></article>`;
    }).join('');
  }
}
function cartKey(index, colorIndex, sizeIndex) { return `${index}::${colorIndex}::${sizeIndex}`; }
function readCartKey(key) {
  if (/^\d+$/.test(key)) return { key, index:Number(key), colorIndex:-1, sizeIndex:0 };
  const [index, colorIndex, sizeIndex] = key.split('::').map(Number);
  return { key, index, colorIndex, sizeIndex };
}
function changeCart(key, delta) {
  cart[key] = Math.max(0, Number(cart[key] || 0) + delta);
  if (!cart[key]) delete cart[key];
  localStorage.setItem('ebc-cart', JSON.stringify(cart));
  renderCart();
}
function openCart(open) {
  document.body.classList.toggle('cart-open', open);
  document.getElementById('cart-panel').setAttribute('aria-hidden', String(!open));
  document.getElementById('cart-toggle').setAttribute('aria-expanded', String(open));
}
document.querySelector('.product-grid').addEventListener('click', event => {
  const detailButton = event.target.closest('[data-details]');
  if (detailButton) {
    const product = products[Number(detailButton.dataset.details)];
    const arabic = document.documentElement.lang === 'ar';
    const dialog = document.getElementById('product-dialog');
    const details = arabic ? product.detailsAr : product.detailsEn;
    const size = product.size ? `<p class="dialog-pack"><b>${arabic ? 'حجم العبوة' : 'Pack size'}</b><span>${product.size}</span></p>` : '';
    const source = product.source ? `<a class="manufacturer-source" href="${product.source}" target="_blank" rel="noopener">${arabic ? 'افتح معلومات الشركة المصنعة ↗' : 'Open manufacturer information ↗'}</a>` : '';
    document.getElementById('product-dialog-content').innerHTML = `<div class="dialog-image"><img src="assets/products/${product.file}" alt="${product.name}"></div><div class="dialog-copy"><p class="eyebrow"><span>${arabic ? product.typeAr : product.typeEn}</span></p><h2 id="dialog-title">${product.name}</h2><p class="dialog-description">${arabic ? product.ar : product.en}</p>${size}<h3>${arabic ? 'الاستخدام ومعلومات المنتج' : 'Uses and product information'}</h3><ul>${details.map(item => `<li>${item}</li>`).join('')}</ul>${source}<p class="dialog-disclaimer">${arabic ? 'تُعرض المعلومات للتعريف بالمنتج. راجع أحدث نشرة فنية وتواصل مع EBC لتأكيد الملاءمة والتوفر قبل الاستخدام.' : 'Information is for product discovery. Check the latest technical data sheet and confirm suitability and availability with EBC before use.'}</p></div>`;
    dialog.querySelector('.dialog-close').setAttribute('aria-label', arabic ? 'إغلاق تفاصيل المنتج' : 'Close product details');
    dialog.showModal();
    return;
  }
  const colorButton = event.target.closest('[data-option-color]');
  if (colorButton) {
    const card = colorButton.closest('.product-card');
    card.dataset.selectedColor = colorButton.dataset.optionColor;
    card.querySelectorAll('.color-swatch').forEach(swatch => swatch.classList.toggle('selected', swatch === colorButton));
    return;
  }
  const sizeButton = event.target.closest('[data-option-size]');
  if (sizeButton) {
    const card = sizeButton.closest('.product-card');
    card.dataset.selectedSize = sizeButton.dataset.optionSize;
    card.querySelectorAll('[data-option-size]').forEach(pill => pill.classList.toggle('selected', pill === sizeButton));
    return;
  }
  const button = event.target.closest('[data-add]');
  if (!button) return;
  const card = button.closest('.product-card');
  const key = cartKey(Number(button.dataset.add), Number(card.dataset.selectedColor), Number(card.dataset.selectedSize));
  changeCart(key, 1);
  const prior = button.innerHTML;
  button.innerHTML = document.documentElement.lang === 'ar' ? '✓ أضيفت' : '✓ Added';
  window.setTimeout(() => { if (button.isConnected) button.innerHTML = prior; }, 1100);
});
document.querySelector('.dialog-close').addEventListener('click', () => document.getElementById('product-dialog').close());
document.getElementById('product-dialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.getElementById('cart-items').addEventListener('click', event => {
  const quantityButton = event.target.closest('[data-qty]');
  const removeButton = event.target.closest('[data-remove]');
  if (quantityButton) changeCart(quantityButton.dataset.key, Number(quantityButton.dataset.qty));
  if (removeButton) { delete cart[removeButton.dataset.remove]; localStorage.setItem('ebc-cart', JSON.stringify(cart)); renderCart(); }
});
document.getElementById('cart-toggle').addEventListener('click', () => openCart(true));
document.getElementById('cart-close').addEventListener('click', () => openCart(false));
document.getElementById('cart-backdrop').addEventListener('click', () => openCart(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape') openCart(false); });
document.getElementById('checkout-form').addEventListener('submit', event => {
  event.preventDefault();
  const arabic = document.documentElement.lang === 'ar';
  const note = document.getElementById('checkout-note');
  const items = Object.entries(cart).map(([key, quantity]) => ({ ...readCartKey(key), quantity:Number(quantity) })).filter(item => item.quantity > 0 && products[item.index]).map(item => ({ ...item, product:products[item.index] }));
  if (!items.length) { note.textContent = arabic ? 'أضف منتجاً واحداً على الأقل إلى السلة أولاً.' : 'Add at least one product to your cart first.'; return; }
  if (!ORDER_EMAIL || !ORDER_EMAIL.includes('@')) { note.textContent = arabic ? 'أضف بريد استقبال الطلبات في ORDER_EMAIL بملف script.js لإكمال الطلب.' : 'Add your order-receiving email to ORDER_EMAIL in script.js to complete the request.'; return; }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(arabic ? 'طلب منتجات — إيثر لكيماويات البناء' : 'Product request — Ether Building Chemical');
  const lines = items.map(({ product, quantity, colorIndex, sizeIndex }) => {
    const color = (product.colors || [])[colorIndex];
    const size = (product.sizes || (product.size ? [product.size] : []))[sizeIndex] || product.size || '';
    return `${product.name} — ${quantity} × ${size}${color ? ` — ${arabic ? 'اللون المطلوب' : 'Requested color'}: ${arabic ? color.ar : color.name} (${arabic ? 'يرجى التأكيد' : 'please confirm'})` : ''}`;
  });
  const body = encodeURIComponent(`${arabic ? 'طلب منتجات من موقع EBC' : 'Product request from EBC website'}\n\n${arabic ? 'الاسم' : 'Name'}: ${data.get('customer')}\n${arabic ? 'الهاتف' : 'Phone'}: ${data.get('phone')}\n${arabic ? 'المدينة / منطقة التوصيل' : 'City / delivery area'}: ${data.get('location') || '—'}\n\n${arabic ? 'المنتجات والكميات المطلوبة' : 'Requested products and quantities'}:\n${lines.join('\n')}\n\n${arabic ? 'ملاحظة' : 'Note'}: ${data.get('note') || '—'}`);
  note.textContent = arabic ? 'تم تجهيز مسودة الطلب في تطبيق البريد. راجعها ثم أرسلها.' : 'The order draft is ready in your email app. Review it and send.';
  window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
});

const arabicText = {
  '.topline': ['<span class="pulse"></span> نبني بثقة <span class="topline-note">إيثر لكيماويات البناء · الرمادي، العراق</span>'],
  '.nav > a:not(.nav-cta)': ['المنتجات', 'عن EBC', 'طريقة الاستخدام'],
  '.nav-cta': ['تواصل مع فريقنا <span>↗</span>'],
  '.language-toggle': ['English <span>EN</span>'],
  '.cart-label': ['السلة'],
  '.cart-head .eyebrow': ['طلبك'],
  '.cart-head h2': ['طلب المنتجات'],
  '#checkout-form h3': ['تفاصيل الطلب'],
  '.checkout-submit': ['إعداد طلب بالبريد الإلكتروني <span>↗</span>'],
  '.brand:not(.footer-brand) > span': ['إيثر لكيماويات<br><b>البناء</b>'],
  '#slide-kicker': ['مواد تصنع فرقاً'],
  '#slide-title': ['بناء يدوم.<br><em>وحماية تثق بها.</em>'],
  '#slide-description': ['حلول عملية لكيماويات البناء، لمبانٍ أقوى وتشطيبات موثوقة وحماية تدوم.'],
  '.hero-actions .button': ['استكشف المنتجات <span>↓</span>'],
  '.hero-actions .text-link': ['تعرّف على EBC <span>↗</span>'],
  '.hero-footer > span:first-child': ['حلول عملية لكل يوم'],
  '.scroll-cue': ['مرر لاكتشاف المزيد <b>↓</b>'],
  '.intro-copy .eyebrow': ['01 / عن EBC'],
  '.intro-copy h2': ['المباني الجيدة تبدأ<br><em>من أساسها.</em>'],
  '.intro-copy > p:not(.eyebrow)': ['توفر إيثر لكيماويات البناء حلولاً عملية للتفاصيل المهمة، من تجهيز السطح إلى حمايته على المدى الطويل. مقرنا في الرمادي، العراق، ونساعدك في اختيار المنتج المناسب لعملك.'],
  '.intro-copy .text-link': ['لنبني ما هو أفضل <span>↗</span>'],
  '.intro-note p': ['لمن يبنون<br>ويصلحون ويحمون.'],
  '.intro-note > span': ['الرمادي · العراق'],
  '.section-heading .eyebrow': ['02 / دليل المنتجات'],
  '.section-heading h2': ['حلول لكل<br><em>مرحلة من البناء.</em>'],
  '.heading-aside': ['تعرّف على فئات منتجاتنا.<br>تحتاج إلى توصية؟ <a href="#contact">اسأل EBC ↗</a>'],
  '.filters': ['<button class="filter active" data-filter="all">كل المنتجات <span>08</span></button><button class="filter" data-filter="waterproofing">العزل المائي</button><button class="filter" data-filter="concrete">معالجة الخرسانة</button><button class="filter" data-filter="finishes">الأرضيات والتشطيبات</button>'],
  '.product-number': ['01 / العزل المائي', '02 / معالجة الخرسانة', '03 / التشطيبات والبلاط', '04 / العزل المائي', '05 / معالجة الخرسانة', '06 / التشطيبات والبلاط'],
  '.image-caption': ['حماية الأسطح', 'إصلاح وتجديد', 'تماسك أقوى', 'إغلاق الفواصل', 'تهيئة السطح', 'اللمسة الأخيرة'],
  '.product-info p': ['تصور مبدئي لعازل إسمنتي مرن للمناطق الرطبة والأسطح المكشوفة.', 'تصور مبدئي لمونة إصلاح لترميم المناطق المتضررة من الخرسانة.', 'تصور مبدئي لمادة لاصقة للبلاط لتسهيل التركيب وتحقيق نتائج موثوقة.', 'تصور مبدئي لمادة لسد الفواصل والفراغات في تفاصيل البناء الشائعة.', 'تصور مبدئي لمادة رابطة لتهيئة الأسطح قبل إضافة طبقة جديدة.', 'تصور مبدئي لمادة حشو فواصل تمنح الأسطح المبلطة مظهراً متناسقاً.'],
  '.sample-label': ['منتج تجريبي — يرجى تأكيد التفاصيل', 'منتج تجريبي — يرجى تأكيد التفاصيل', 'منتج تجريبي — يرجى تأكيد التفاصيل', 'منتج تجريبي — يرجى تأكيد التفاصيل', 'منتج تجريبي — يرجى تأكيد التفاصيل', 'منتج تجريبي — يرجى تأكيد التفاصيل'],
  '.catalog-bottom > span': ['تفاصيل المنتجات من الملصقات ومعلومات الشركات المصنعة'],
  '.catalog-bottom .text-link': ['هل تبحث عن منتج معين؟ <span>↗</span>'],
  '.play-button': ['<span>▶</span>'],
  '.video-tag span': ['عرض فيديو للمنتج'],
  '.video-tag small': ['أضف شرحاً لطريقة الاستخدام'],
  '.feature-caption span': ['ملاحظات ميدانية / 001', 'من التجهيز إلى التشطيب'],
  '.feature-copy .eyebrow': ['03 / شرح واضح'],
  '.feature-copy h2': ['الطريقة الصحيحة<br><em>لإنجاز العمل.</em>'],
  '.feature-copy > p:not(.eyebrow)': ['بعض المنتجات يسهل فهمها عند مشاهدة طريقة استخدامها. أضف هنا عرضاً عملياً أو دليلاً تطبيقياً أو فيديو قصيراً لمساعدة العملاء على الاختيار والاستخدام بثقة.'],
  '.feature-copy .button': ['استفسر عن منتج <span>↗</span>'],
  '.feature-meta span': ['فيديوهات وأدلة', 'قريباً'],
  '.statement-inner .eyebrow': ['نبني على الثقة'],
  '.statement-text': ['مواد أفضل.<br><em>نتائج أفضل.</em>'],
  '.statement-bottom span': ['إيثر لكيماويات البناء', 'الرمادي · العراق', '04 / 04'],
  '.contact-copy .eyebrow': ['04 / تواصل معنا'],
  '.contact-copy h2': ['لنجد معاً<br><em>الحل المناسب.</em>'],
  '.contact-copy > p:not(.eyebrow)': ['أخبرنا عن مشروعك. يساعدك فريقنا في استكشاف المنتجات واختيار نقطة بداية مناسبة.'],
  '.contact-location b': ['موقع EBC'],
  '.contact-location small': ['الرمادي، الأنبار · العراق'],
  '.facebook-link': ['تابع EBC على فيسبوك <span>↗</span>'],
  '.contact-form .button': ['إعداد الاستفسار <span>↗</span>'],
  '.form-note': ['هذا النموذج يفتح تطبيق البريد الإلكتروني. أضف بريد EBC في ملف <code>script.js</code> قبل النشر.'],
  '.footer-brand > span': ['إيثر لكيماويات<br><b>البناء</b>'],
  '.footer > span:nth-child(2)': ['نبني بثقة.'],
  '.footer > span:nth-child(3)': ['© <span id="year"></span> EBC · الرمادي، العراق'],
  '.back-top': ['العودة للأعلى ↑']
};
const englishOriginals = new Map();
function setLanguage(language) {
  const arabic = language === 'ar';
  document.documentElement.lang = arabic ? 'ar' : 'en';
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  document.body.classList.toggle('arabic', arabic);
  document.title = arabic ? 'إيثر لكيماويات البناء | EBC' : 'Ether Building Chemical | EBC';
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', arabic ? 'ar_IQ' : 'en_US');
  document.querySelector('meta[name="description"]').content = arabic ? 'إيثر لكيماويات البناء — حلول عملية لحماية المباني وتقويتها في العراق.' : 'Ether Building Chemical — practical chemical solutions for stronger, better protected buildings in Iraq.';
  Object.entries(arabicText).forEach(([selector, translations]) => {
    const elements = [...document.querySelectorAll(selector)];
    elements.forEach((element, index) => {
      const key = `${selector}:${index}`;
      if (!englishOriginals.has(key)) englishOriginals.set(key, element.innerHTML);
      if (arabic) element.innerHTML = translations[index] ?? translations[0];
      else element.innerHTML = englishOriginals.get(key);
    });
  });
  renderProducts(language);
  renderCart(language);
  document.querySelectorAll('.contact-form label').forEach((label, index) => {
    const labelNames = arabic ? ['اسمك', 'ما الذي تبحث عنه؟', 'أخبرنا بالمزيد'] : ['Your name', 'What are you looking for?', 'Tell us a little more'];
    if (label.firstChild?.nodeType === Node.TEXT_NODE) label.firstChild.nodeValue = `${labelNames[index]} `;
    const input = label.querySelector('input,select,textarea');
    if (input) {
      input.placeholder = arabic ? (index === 0 ? 'الاسم' : index === 2 ? 'اسم المنتج أو المشروع أو سؤالك' : '') : (index === 0 ? 'Name' : index === 2 ? 'Product name, project or question' : '');
      if (input.tagName === 'SELECT') {
        [...input.options].forEach((option, optionIndex) => option.textContent = arabic
          ? ['معلومات عن المنتجات', 'إرشادات الاستخدام', 'فيديو أو شرح للمنتج', 'أمر آخر'][optionIndex]
          : ['Product information', 'Application advice', 'Product video or tutorial', 'Something else'][optionIndex]);
      }
    }
  });
  document.querySelectorAll('.checkout-form label').forEach((label, index) => {
    const labelNames = arabic ? ['الاسم', 'رقم الهاتف', 'المدينة / منطقة التوصيل', 'ملاحظة'] : ['Name', 'Phone', 'City / delivery area', 'Note'];
    if (label.firstChild?.nodeType === Node.TEXT_NODE) label.firstChild.nodeValue = `${labelNames[index]} `;
    const input = label.querySelector('input,textarea');
    if (input) input.placeholder = arabic ? ['اسمك', 'رقم الهاتف', 'المدينة أو المنطقة', 'ملاحظة اختيارية'][index] : ['Your name', 'Phone number', 'City or area', 'Optional note'][index];
  });
  document.querySelector('.checkout-note').textContent = arabic ? 'لا يتم تحصيل أي مبلغ أو حفظ بياناتك على الموقع. تُجهز رسالة بالمنتجات لتراجعها وترسلها من بريدك.' : 'No payment is collected and this site does not save your details. It prepares an email with your items for you to review and send.';
  document.getElementById('product-search').placeholder = arabic ? 'ابحث عن منتج' : 'Search products';
  document.getElementById('clear-search').setAttribute('aria-label', arabic ? 'مسح البحث' : 'Clear search');
  document.querySelector('.filters').setAttribute('aria-label', arabic ? 'تصفية المنتجات' : 'Filter products');
  document.querySelectorAll('.slide-dot').forEach((dot, index) => dot.setAttribute('aria-label', arabic ? `عرض الشريحة ${index + 1}` : `Show slide ${index + 1}`));
  const toggle = document.querySelector('.language-toggle');
  toggle.innerHTML = arabic ? 'English <span>EN</span>' : 'العربية <span>ع</span>';
  toggle.setAttribute('aria-label', arabic ? 'Switch to English' : 'التبديل إلى العربية');
  document.getElementById('year').textContent = new Date().getFullYear();
  showSlide(currentSlide);
  applyProductFilters();
  localStorage.setItem('ebc-language', language);
}
document.querySelector('.language-toggle').addEventListener('click', () => setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar'));
setLanguage(localStorage.getItem('ebc-language') || 'ar');

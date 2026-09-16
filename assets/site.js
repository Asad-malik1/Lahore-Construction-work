// Al-Rukan Builders - Universal Site Script with Full-Page Bilingual Translation Engine
(function() {
  'use strict';

  var DICTIONARY = {
  "\"House-ready\" means we take responsibility for the full sequence of trades — structure, plumbing/electrical, finishing, flooring — so what you get at the end is a livable house, not a shell with a list of leftover jobs.": "\"تیار گھر\" کا مطلب ہے کہ ہم تمام مراحل کی مکمل ذمہ داری لیتے ہیں — اسٹرکچر، پلمبنگ/بجلی، فنشنگ، اور فرش بندی — تاکہ آخر میں آپ کو رہائش کے مکمل قابل گھر ملے، نہ کہ نامکمل کاموں کا ڈھانچہ۔",
  "*Rates vary slightly based on Lahore society regulations, soil type and custom architectural drawings.": "*لاہور کی مختلف سوسائٹیز کے قواعد، مٹی کی قسم اور کسٹم نقشہ جات کی بنیاد پر ریٹس میں معمولی فرق ہو سکتا ہے۔",
  "1 Kanal (4,500 sq ft)": "1 کنال (4,500 مربع فٹ)",
  "1. Purpose of this website": "1. اس ویب سائٹ کا مقصد",
  "10 Marla (2,250 sq ft)": "10 مرلہ (2,250 مربع فٹ)",
  "100% genuine on-site photos of our residential, commercial, gray structure, and finishing works across Lahore.": "لاہور بھر میں ہماری رہائشی، کمرشل، گرے اسٹرکچر اور فنشنگ سائٹس کی 100% اصلی تصاویر۔",
  "2. No liability for online data or third-party actions": "2. آن لائن ڈیٹا یا فریق ثالث کے اقدامات کی عدم ذمہ داری",
  "3 Marla (675 sq ft)": "3 مرلہ (675 مربع فٹ)",
  "3. No guarantee, warranty or work commitment is made on this website": "3. اس ویب سائٹ پر کوئی حتمی گارنٹی یا پیشگی قانونی وعدہ نہیں ہے",
  "4. Contracts are decided separately, in writing, at the time of agreement": "4. معاہدے تحریری طور پر کام کے وقت الگ طے کیے جاتے ہیں",
  "5 Marla (1,125 sq ft)": "5 مرلہ (1,125 مربع فٹ)",
  "5. Cookies & analytics": "5. کوکیز اور اینالیٹکس",
  "6. Contacting us about this policy": "6. پالیسی کے حوالے سے رابطہ",
  "A Lahore construction family, four decades in.": "لاہور کا مستند تعمیراتی ادارہ، چار دہائیوں سے زیادہ کا تجربہ۔",
  "A common problem with house construction in Lahore is a contractor bringing in a different, unfamiliar labour team for every job. We keep our own core group of masons, tile fitters, marble fitters and helpers who have worked with this company for years.": "لاہور میں تعمیرات کا عام مسئلہ یہ ہے کہ ٹھیکیدار ہر کام کے لیے نئی اور غیر تربیت یافتہ لیبر لاتے ہیں۔ ہمارے پاس اپنے تجربہ کار راج مستری، ٹائل فٹرز، ماربل کاریگر اور ہیلپرز کی مستقل ٹیم ہے جو برسوں سے ہمارے ساتھ وابستہ ہے۔",
  "A contractor who hands over a house you can actually move into.": "ایسا کنٹریکٹر جو آپ کو ایسا گھر بنا کر دے جس میں آپ فوراً شفٹ ہو سکیں۔",
  "A final walkthrough and snag list before handover, so small defects are fixed before you move in": "سپردگی سے قبل حتمی انسپیکشن تاکہ شفٹ ہونے سے پہلے تمام چھوٹی بڑی خامیاں دور ہو سکیں",
  "A home is built once in a lifetime. Compare what you actually get when choosing Al-Rukan Builders:": "گھر زندگی میں ایک بار بنتا ہے۔ الرکن بلڈرز کے انتخاب پر اصل فوائد کا موازنہ کریں:",
  "A house is the biggest single purchase most families in Lahore will ever make. It is not the place for shortcuts, misleading estimates or cut-corner materials. We give honest prices, use agreed materials, and put our own names and reputations behind the finished work.": "زیادہ تر فیملیز کے لیے گھر زندگی کی سب سے بڑی اور اہم سرمایہ کاری ہوتی ہے۔ یہ وہ جگہ نہیں جہاں ناقص مٹیریل یا جھوٹے وعدوں سے کام لیا جائے۔ ہم ہمیشہ جائز ریٹس دیتے ہیں اور طے شدہ مٹیریل ہی استعمال کرتے ہیں۔",
  "A legacy of 40+ years in construction, structural durability, and trust across Lahore, Punjab. Founded 1984.": "لاہور، پنجاب میں 1984 سے قائم 40+ سالہ پائیدار تعمیرات اور اعتماد کا نام۔",
  "A lot of delay and rework on Lahore construction sites comes from trades happening in the wrong order — for example, finishing paint before electrical conduit work is fully closed up, or tiling before plumbing pressure-testing. Because our engineer and supervisor oversee the whole job rather than just one trade, we plan this sequence deliberately": "لاہور میں تعمیراتی تاخیر اور نقصانات اکثر غلط ترتیب کی وجہ سے ہوتے ہیں — جیسے پائپ ٹیسٹنگ سے پہلے ٹائل لگانا۔ ہمارے انجینئر کی زیرِ نگرانی تمام مراحل درست ترتیب سے ہوتے ہیں۔",
  "A lot of delay and rework on Lahore construction sites comes from trades happening in the wrong order — for example, finishing paint before electrical conduit work is fully closed up, or tiling before plumbing pressure-testing. Because our engineer and supervisor oversee the whole job rather than just one trade, we plan this sequence deliberately.": "لاہور کی سائٹس پر تاخیر اور غلطیوں کی بڑی وجہ کام کا غلط شیڈول ہے — مثلاً الیکٹرک پائپنگ سے پہلے پینٹ یا پلمبنگ پریشر ٹیسٹ سے پہلے ٹائل لگانا۔ چونکہ ہمارے انجینئر اور سپروائزر پورے پروجیکٹ کی نگرانی کرتے ہیں، ہم ہر مرحلے کی ترتیب کو مکمل مہارت سے پلان کرتے ہیں۔",
  "A shop or small commercial building has different priorities from a home — visible frontage, efficient floor space, wiring for signage and equipment, and often a tighter timeline because every closed day is lost business.": "دکان یا کمرشل عمارت کے تقاضے رہائشی گھر سے بالکل مختلف ہوتے ہیں — نمایاں فرنٹ، کارآمد جگہ، سائن بورڈ اور آلات کے لیے وائرنگ، اور سخت ڈیڈ لائن کیونکہ ہر بند دن کاروبار کا نقصان ہوتا ہے۔",
  "AL-RUKAN BUILDERS": "الرکن بلڈرز",
  "About Us": "ہمارے بارے میں",
  "Absentee owner; unskilled laborers make critical mistakes": "ٹھیکیدار سائٹ سے غائب رہتا ہے؛ ناتجربہ کار مزدور سنگین غلطیاں کرتے ہیں",
  "Adding a room, floor, or boundary wall extension to an existing house": "موجودہ مکان پر نئے کمرے، اضافی منزل یا باؤنڈری وال کی تعمیر",
  "Al-Rukan Builders did not start as a website or a brand — it started as a working relationship between a builder and the families of Lahore who trusted him with their homes.": "الرکن بلڈرز کا آغاز کسی ویب سائٹ یا اشتہار سے نہیں ہوا — بلکہ لاہور کی ان فیملیز کے اعتماد سے ہوا جنہوں نے اپنے گھروں کی تعمیر ہمارے سپرد کی۔",
  "Al-Rukan Builders — Serving Lahore since 1984 with 40+ years of quality construction experience.": "الرکن بلڈرز — 40 سال سے زائد معیاری تعمیراتی تجربے کے ساتھ لاہور بھر میں خدمات۔",
  "All Projects (12)": "تمام پروجیکٹس (12)",
  "All binding terms for a project — scope of work, material specification, cost, payment schedule, timeline, guarantee or warranty period — are decided only in a direct, written agreement/contract signed between the client and Al-Rukan Builders at the time the job is confirmed. Nothing on this website replaces that written contract.": "کسی بھی منصوبے کی تمام شرائط — کام کی تفصیل، میٹریل، قیمت، ادائیگی کا شیڈول، مدت اور گارنٹی — کام کی تصدیق کے وقت کسٹمر اور الرکن بلڈرز کے درمیان طے پانے والے تحریری معاہدے سے طے ہوتی ہیں۔ ویب سائٹ کی معلومات تحریری معاہدے کا متبادل نہیں۔",
  "All rights reserved.": "جملہ حقوق محفوظ ہیں۔",
  "Anti-skid and outdoor tiling for terraces and driveways": "ٹیرس، گیلری اور ڈرائیو وے کے لیے اینٹی سکڈ بیرونی ٹائلز",
  "Any approvals, permissions or regulatory requirements for commercial construction in your specific area of Lahore are the client's responsibility to confirm with the relevant authority; we build to the agreed plan and specification set out in the written contract.": "متعلقہ اداروں سے کمرشل تعمیراتی این او سی اور منظوری کلائنٹ کی ذمہ داری ہوتی ہے، جبکہ ہم تحریری معاہدے کے مطابق منظور شدہ نقشے پر کام کرتے ہیں۔",
  "Any information you send us through a contact form, WhatsApp, phone call or email is used only to respond to your enquiry and to discuss your project. We do not sell or share visitor information with third parties for marketing purposes.": "رابطہ فارم، واٹس ایپ، فون کال یا ای میل کے ذریعے فراہم کردہ معلومات صرف آپ کے پروجیکٹ پر گفتگو کے لیے استعمال ہوتی ہیں۔ ہم کسٹمر ڈیٹا کسی تیسرے فریق کو فروخت یا شیئر نہیں کرتے۔",
  "Any such contract, and any dispute arising from it, will be governed by and interpreted according to the applicable laws of the Islamic Republic of Pakistan (including relevant Punjab/Lahore regulations) as they stand valid and in force at the time the contract is signed — not by any general statement made on this website.": "تمام معاہدے اور تنازعات اسلامی جمہوریہ پاکستان اور حکومت پنجاب کے مروجہ قوانین کے تحت حل ہوں گے، جو معاہدے کے وقت لاگو ہوں گے۔",
  "Approximate size (marla/sq. ft.) if known": "پلاٹ یا گھر کا تخمینہ سائز (مرلہ / مربع فٹ)",
  "Architectural vision brought to life with premium exterior facade and structural finish.": "جدید ایکسٹیریئر ڈیزائن، خوبصورت فرنٹ ایلیویشن اور مضبوط اسٹرکچر کی تکمیل۔",
  "Asad Ali": "اسد علی",
  "Ask us for a site visit — there is no charge for an initial discussion.": "سائٹ وزٹ کے لیے رابطہ کریں — ابتدائی مشورے کے کوئی چارجز نہیں ہیں۔",
  "Availability": "دستیابی",
  "Back to Home": "صفحۂ اول پر جائیں",
  "Bathroom & Tiles": "باتھ روم اور ٹائلز",
  "Bathroom Tiles & Marble Sanitary Work": "باتھ روم ٹائلز اور ماربل سینیٹری فٹنگ",
  "Bathroom tile installation with proper waterproofing and drainage slope": "باتھ رومز کی ٹائلنگ مع واٹر پروفنگ اور پانی کے درست ڈھلوان",
  "Bathrooms overhaul, floor tile change, room extensions, modern kitchen & paint": "باتھ رومز کی مکمل تبدیلی، فلور ٹائلز، کمروں کی توسیع، ماڈرن کچن اور پریمیم پینٹ",
  "Before & After — Full House Renovation": "قبل اور بعد — مکمل گھر کی رینوویشن",
  "Before fitting, we check slab-to-slab veining and colour match, since marble from the same batch can still vary. We plan the layout so pattern and veining run consistently across a room rather than jumping randomly from piece to piece, level the base properly, and control joint width so the finished floor reads as one surface rather than a patchwork": "لگانے سے پہلے ہم سلیب کے ریشوں اور رنگ کا ملان کرتے ہیں تاکہ پورے کمرے کا ڈیزائن ایک جیسا اور خوبصورت نظر آئے، اور باریک جوڑوں کے ساتھ مکمل ہموار لیول ہو۔",
  "Before fitting, we check slab-to-slab veining and colour match, since marble from the same batch can still vary. We plan the layout so pattern and veining run consistently across a room rather than jumping randomly from piece to piece, level the base properly, and control joint width so the finished floor reads as one surface rather than a patchwork.": "فٹنگ سے قبل ہم ماربل کے ریشوں اور رنگ کا مکمل معائنہ کرتے ہیں۔ ہم لے آؤٹ کو اس طرح ترتیب دیتے ہیں کہ ڈیزائن پورے کمرے میں قدرتی اور ہموار نظر آئے، بیس کا لیول بالکل درست رکھیں تاکہ فرش بغیر جوڑوں کے ایک خوبصورت ہموار سطح دکھے۔",
  "Before laying any tile, our team checks the base surface — level, moisture and any cracks — because tiling over a bad base is the most common reason tiles lift or crack later. We prepare the surface, plan the layout to minimise awkward cuts near doors and corners, and lay tiles with proper spacing and adhesive rather than rushing to finish the area in a day.": "ٹائل لگانے سے قبل ہماری ٹیم بیس کا لیول، نمی اور دراڑیں چیک کرتی ہے کیونکہ خراب بیس ہی بعد میں ٹائل اکھڑنے یا ٹوٹنے کا سبب بنتی ہے۔ ہم مناسب چپکنے والے کیمیکل (بانڈ) اور سپیسرز کے ساتھ بہترین فنشنگ دیتے ہیں۔",
  "Before you call, it helps to have:": "کال کرنے سے پہلے درج ذیل معلومات مدنظر رکھیں:",
  "Bestway / Maple Leaf / Fauji OPC Cement": "بیسٹ وے / میپل لیف / فوجی او پی سی سیمنٹ",
  "Book an Inspection": "معائنے کا وقت بک کریں",
  "Boundary and structural work for plazas and small commercial plots": "پلازوں اور کمرشل پلاٹس کی باؤنڈری وال اور بنیادی اسٹرکچرل کام",
  "Brickwork for external and internal walls": "اول درجے کی اینٹوں کی معیاری چنائی (اندرونی و بیرونی)",
  "Budget-focused construction": "بجٹ کے مطابق تعمیر",
  "Build Your Dream Home in Lahore Without Delays, Hidden Costs, or Substandard Material": "لاہور میں اپنے خوابوں کا گھر بنائیں — بغیر کسی تاخیر، پوشیدہ اخراجات یا ناقص میٹریل کے",
  "Building or renovating a shop in Lahore?": "لاہور میں دکان بنانا یا تزئین و آرائش چاہتے ہیں؟",
  "Building your house as if it were ours.": "آپ کے گھر کی تعمیر بالکل اپنے گھر کی طرح۔",
  "Business information site only — see Privacy & Disclaimer.": "صرف کاروباری معلومات کی ویب سائٹ — پرائیویسی اور ڈس کلیمر دیکھیں۔",
  "CONSTRUCTION WORKERS IN LAHORE": "لاہور میں ماہر تعمیراتی کاریگر اور لیبر",
  "Call 0305 4302352": "کال کریں: 0305 4302352",
  "Call Now": "ابھی کال کریں",
  "Call Owner": "مالک سے بات کریں",
  "Call Owner Now": "ابھی بلڈر سے رابطہ کریں",
  "Call for Availability": "دستیابی معلوم کرنے کیلئے کال کریں",
  "Call for a Quote": "کوٹیشن کیلئے کال کریں",
  "Call for a Site Visit": "سائٹ وزٹ کیلئے کال کریں",
  "Cement & Brick Quality": "سیمنٹ اور اینٹوں کا معیار",
  "Certified A-Grade First Quality Clay Bricks": "سرٹیفائیڈ اے-گریڈ اول کوالٹی مٹی کی اینٹیں",
  "Certified shuttering carpenters, steel fixers, professional masons, and waterproofing technicians.": "ماہر شٹرنگ کارپینٹرز، اسٹیل فکسرز، تجربہ کار راج مستری اور واٹر پروفنگ ٹیکنیشنز۔",
  "Chat on WhatsApp": "واٹس ایپ پر رابطہ کریں",
  "Choosing your marble": "ماربل کا انتخاب",
  "Clean grouting with matching color epoxy or polymer grout": "ہم رنگ یا میچنگ ایپوکسی گروٹ کے ساتھ صاف ستھری فنشنگ",
  "Columns, beams and RCC slab casting": "آر سی سی پلرز، بیمز اور چھت کے لینٹر کی مضبوط بھرائی",
  "Commercial": "کمرشل",
  "Commercial Plaza & Retail Construction": "کمرشل پلازہ اور دکانوں کی پائیدار تعمیر",
  "Commercial and shop floor tiling for showrooms and offices": "شو رومز، دکانوں اور دفاتر کے لیے ہیوی ڈیوٹی کمرشل فلور ٹائلنگ",
  "Commercial clients are usually working to a firmer budget and payback timeline than a homeowner. We are direct about where money is best spent (structure, wiring capacity, flooring durability for foot traffic) versus where a shopkeeper can reasonably save (decorative finishing that can be upgraded later).": "کمرشل کلائنٹس عموماً محدود بجٹ پر کام کرتے ہیں۔ ہم واضح مشورہ دیتے ہیں کہ کن چیزوں پر پیسہ لگانا ضروری ہے (مضبوط اسٹرکچر، ہیوی وائرنگ، پائیدار فرش) اور کہاں بچت کی جا سکتی ہے۔",
  "Company": "کمپنی",
  "Complete Construction & Renovation Services in Lahore": "لاہور میں مکمل تعمیرات اور رینوویشن سروسز",
  "Complete House Construction": "مکمل مکان کی تعمیر",
  "Complete Turnkey Finishing (A-Grade)": "مکمل ٹرن کی فنشنگ (اے-گریڈ پریمیم)",
  "Compliance": "قانونی ضوابط اور منظوری",
  "Construction Workers": "تعمیراتی کاریگر",
  "Construction Workers in Lahore": "لاہور میں ہنر مند تعمیراتی مزدور و کاریگر",
  "Contact": "رابطہ کریں",
  "Contact Us": "ہم سے رابطہ کریں",
  "Coordinated via office": "دفتر کے ذریعے رابطہ",
  "Coordinating our own tile and marble fitters so flooring lines up with the finishing schedule": "ٹائل اور ماربل کے کاریگروں کے شیڈول کی باقاعدہ منصوبہ بندی",
  "Cost Calculator": "تعمیراتی لاگت کیلکولیٹر",
  "Custom designed family villa built to exact engineering standards and aesthetic perfection.": "انجینئرنگ اصولوں اور جدید طرزِ تعمیر پر تیار کردہ خوبصورت لگژری فیملی ولا۔",
  "Custom master bathroom layout, non-slip floor tiles, and premium sanitary plumbing fittings.": "کسٹم ماسٹر باتھ روم ڈیزائن، اینٹی سلپ ٹائلز اور پریمیم سینیٹری و پلمبنگ ورک۔",
  "Daily Supervision": "روزانہ سائٹ پر نگرانی",
  "Damp-proofing and structural waterproofing at foundation level": "ڈی پی سی (DPC) اور بنیادوں کی جدید واٹر پروفنگ",
  "Damp-proofing and treatment of seepage and water damage": "سیم، نمی اور چھتوں کی لیکیج کا مستقل کیمیکل ٹریٹمنٹ",
  "Dark": "ڈارک موڈ",
  "Dark Mode": "ڈارک موڈ",
  "Dedicated manpower on your site with firm contractual completion date": "سائٹ پر وقف لیبر اور تحریری معاہدے کے تحت طے شدہ حتمی تاریخ",
  "Descriptions of our services on this website (construction, renovation, gray structure, tiles, marble fitting, and related work) are general information about what we offer — they are not a guarantee, warranty, fixed price, or fixed timeline for any specific project. We do not make false promises to win business, and any figures, timelines or claims quoted verbally or on this site should not be treated as binding.": "ویب سائٹ پر درج خدمات کی تفصیلات عمومی معلومات کے لیے ہیں۔ حتمی لاگت، میٹریل اور مدت کا تعین صرف سائٹ معائنے اور باضابطہ تحریری معاہدے میں ہوتا ہے۔",
  "Direct Contact": "براہ راست رابطہ",
  "Direct supervision by experienced supervisors to maintain quality": "کوالٹی برقرار رکھنے کے لیے سینیئر سپروائزر کی براہ راست نگرانی",
  "Discuss Your Project": "اپنے پروجیکٹ پر بات کریں",
  "Don't risk your lifetime savings on inexperienced local contractors. With Al-Rukan Builders, you get Grade-60 steel, certified A-grade brickwork, fixed-rate transparent milestone contracts, and dedicated daily site engineers.": "اپنی زندگی بھر کی جمع پونجی ناتجربہ کار ٹھیکیداروں پر خطرے میں نہ ڈالیں۔ الرکن بلڈرز کے ساتھ پائیں گریڈ-60 اسٹیل، اول اینٹیں، شفاف معاہدہ اور سائٹ پر روزانہ انجینئر کی موجودگی۔",
  "Doors, woodwork coordination and paint": "دروازے، ووڈ ورک (لکڑی کا کام) اور پریمیم پینٹ فنشنگ",
  "Double Story (Standard)": "ڈبل اسٹوری (معیاری گھر)",
  "Double Story + Mumty": "ڈبل اسٹوری مع ممٹی",
  "Dream to Reality": "خواب سے حقیقت تک",
  "Dream to Reality — Modern House Elevation": "خواب سے حقیقت تک — جدید ہاؤس ایلیویشن",
  "Dreams Turn True": "خوابوں کی تعبیر",
  "Dreams Turn True — Luxury Completed Villa": "خوابوں کی تعبیر — پرتعیش مکمل شدہ ولا",
  "Electrical and plumbing chasing and rough-in": "بجلی کی پائپنگ اور پلمبنگ کا پائیدار انڈر گراؤنڈ کام",
  "Email:": "ای میل:",
  "End-to-end expertise for residential homes, plazas, and renovation projects.": "رہائشی مکانات، کمرشل پلازوں اور رینوویشن کے کاموں میں مکمل مہارت۔",
  "End-to-end site management from initial ground layout and gray structure to final keys handover.": "بنیاد کے لے آؤٹ اور گرے اسٹرکچر سے لے کر چابی کی سپردگی تک مکمل انتظام۔",
  "Engineer": "انجینئر",
  "Engineer Tajamal Malik checks the structure — cracks, dampness, foundation movement, roof and beam condition — before we give any estimate. If a wall looks cosmetic but is actually a symptom of a structural or drainage problem, we say so, even if it means a bigger scope and cost than the client expected. We would rather lose a job by being honest than win it and leave a client with the same problem in two years": "کوٹیشن سے پہلے ہمارے انجینئر تجمل ملک دیواروں، بنیادوں، چھت اور سیم کا باریک بینی سے جائزہ لیتے ہیں تاکہ مسئلہ ہمیشہ کے لیے حل ہو سکے۔",
  "Engineer Tajamal Malik checks the structure — cracks, dampness, foundation movement, roof and beam condition — before we give any estimate. If a wall looks cosmetic but is actually a symptom of a structural or drainage problem, we say so, even if it means a bigger scope and cost than the client expected. We would rather lose a job by being honest than win it and leave a client with the same problem in two years.": "انجینئر تجمل ملک ایسٹیمیٹ دینے سے پہلے ساخت، دراڑیں، سیم/نمی اور چھت کی مضبوطی خود چیک کرتے ہیں۔ اگر کوئی خرابی بنیادی اسٹرکچر سے جڑی ہو تو ہم سچائی سے آگاہ کرتے ہیں تاکہ مستقبل میں آپ کا نقصان نہ ہو۔",
  "Engineer — structural planning & site checks": "انجینئر — اسٹرکچرل پلاننگ اور سائٹ معائنہ",
  "English": "English",
  "Excavation and foundation work": "مٹی کی کھدائی، روڑی، پی سی سی اور مضبوط بنیادوں کا کام",
  "Excavation, foundation, RCC columns, beams, brickwork, plaster, plumbing & electrical conduit": "کھدائی، بنیادیں، آر سی سی کالمز، بیم، اینٹوں کی چنائی، پلستر، پلمبنگ اور الیکٹرک پائپنگ",
  "Exterior wall and front elevation tile fixing": "بیرونی دیواروں اور فرنٹ ایلیویشن پر ٹائلز کی مضبوط فٹنگ",
  "Fill in your project details or directly call our lead engineers. We will inspect your site in Lahore and provide an itemized BOQ without any obligation.": "پروجیکٹ کی تفصیل درج کریں یا کال کریں۔ ہم لاہور میں آپ کی سائٹ کا معائنہ کر کے بغیر کسی فیس کے تفصیلی خرچے کا تخمینہ فراہم کریں گے۔",
  "Final snag list and handover": "حتمی کوالٹی چیک اور چابی کی باضابطہ سپردگی",
  "Flexible contracting — daily wages, square-foot rate, or lump-sum contract": "آسان شرائط — دیہاڑی، اسکوائر فٹ ریٹ یا مکمل ٹھیکہ",
  "Floor, bathroom, kitchen and wall tiling that's straight, solid and clean.": "فرش، باتھ روم، کچن اور وال ٹائلز کی سیدھی، مضبوط اور صاف ستھری فٹنگ۔",
  "Flooring — tiles or marble, based on the client's choice": "فرش بندی — کسٹمر کے انتخاب کے مطابق ٹائلز یا ماربل کی معیاری فٹنگ",
  "For renovation of an already-operating shop, we plan work to minimise closed days — sequencing noisy or messy work first, and finishing/detailing work later, and discussing working hours with the shopkeeper so deliveries, customers and construction don't clash more than necessary.": "پہلے سے چلتی ہوئی دکان کی تزئین و آرائش کے لیے، ہم دکان کے بند ہونے کے دنوں کو کم سے کم رکھتے ہیں اور کام کے اوقات دکاندار کی سہولت سے طے کرتے ہیں۔",
  "Foundation, columns, beams, slabs and brick walls are the gray structure stage of a house — the part that gets covered by plaster and paint. Because it can't easily be redone later, we have our engineer check it at every stage, not just at the end.": "بنیادیں، پلر، بیم، لینٹر اور اینٹوں کی چنائی گرے اسٹرکچر کہلاتے ہیں۔ چونکہ اس پر بعد میں پلستر آ جاتا ہے، اس لیے ہمارے انجینئر ہر مرحلے پر ذاتی طور پر سریا اور کنکریٹ مکس چیک کرتے ہیں۔",
  "Fresh branded cement (OPC) & First-class Awwal clay bricks only": "صرف تازہ برانڈڈ سیمنٹ اور اول درجے کی لال پکی اینٹیں",
  "Front facade overhaul with upgraded wall cladding, marble accents, and durable weatherproofing.": "جدید وال کلیڈنگ، ماربل ورک اور موسم سے محفوظ پائیدار فرنٹ ایلیویشن۔",
  "Full \"gut renovation\" of an old house — down to structure, then rebuilt inside": "پرانے مکان کی مکمل اندرونی و بیرونی ازسرنو تعمیر و رینوویشن",
  "Full Daily Technical Supervision by Team": "سائٹ پر روزانہ مکمل تکنیکی نگرانی",
  "Full \\\"gut renovation\\\" of an old house — down to structure, then rebuilt inside": "پرانے گھر کی مکمل اندرونی تعمیرِ نو (گٹ رینوویشن)",
  "Full house floor tiling (porcelain, ceramic, granite tiles)": "پورے گھر کے فرش کی ٹائلنگ (پورسلین، سیرامک، گرینائٹ ٹائلز)",
  "Full mortar or adhesive coverage — no hollow corners": "سیمنٹ بانڈ کی مکمل کوریج تاکہ کوئی کونا کھوکھلا نہ رہے",
  "Full turnkey construction from foundation layout to final key handover. High-end electrical, sanitary, woodwork and finishing.": "بنیادوں سے چابی کی سپردگی تک مکمل ٹرن کی تعمیر۔ اعلیٰ درجے کا الیکٹرک، سینیٹری، ووڈ ورک اور پینٹ فنشنگ۔",
  "Fully built and finished family residence ready for handover in Lahore.": "لاہور میں ہینڈ اوور کے لیے مکمل تیار خوبصورت رہائش گاہ۔",
  "General construction helpers (labour) for site work": "سائٹ کے کاموں کے لیے محنتی اور تربیت یافتہ ہیلپرز",
  "General construction labor for excavation, loading, and site cleaning": "کھدائی، سامان کی منتقلی اور سائٹ کی صفائی کے لیے محنتی مزدور",
  "Get Free Quote": "مفت کوٹیشن حاصل کریں",
  "Get a Free Site Inspection & Accurate Cost Estimation": "مفت سائٹ وزٹ اور درست لاگت کا تخمینہ حاصل کریں",
  "Get our engineer to review your plan before work starts.": "کام شروع کرنے سے پہلے ہمارے انجینئر سے پلان چیک کروائیں۔",
  "Gives fake low quotes, stops work halfway, demands extra cash": "پہلے کم ریٹ دے کر کام بیچ میں روک دیتے ہیں اور اضافی رقم مانگتے ہیں",
  "Got an old house that needs work?": "پرانے گھر کی رینوویشن یا مرمت درکار ہے؟",
  "Grade-60 Deformed Steel (Mughal / Amreli / Model)": "گریڈ-60 ڈیفارمڈ اسٹیل سریا (مغل / امریلی / ماڈل)",
  "Gray Structure": "گرے اسٹرکچر",
  "Gray Structure Contracting": "گرے اسٹرکچر ٹھیکیداری",
  "Gray Structure Only": "صرف گرے اسٹرکچر",
  "Gray Structure Work & RCC Framework": "گرے اسٹرکچر اور مضبوط آر سی سی فریم ورک",
  "Gray structure + Imported/Premium tiles, marble, sanitary fittings, woodwork, paint & ceiling": "گرے اسٹرکچر مع پریمیم ٹائلز، ماربل، سینیٹری فٹنگ، ووڈ ورک، پینٹ اور فال سیلنگ",
  "Gray structure timelines depend on the size of the house, number of floors, and weather (monsoon season slows curing and casting work). We give a realistic schedule in the written contract rather than an attractive number just to win the job — and we tell you as early as possible if something is likely to run over.": "گرے اسٹرکچر کی مدت مکان کے سائز، منزلوں اور موسم پر منحصر ہوتی ہے۔ ہم کنٹریکٹ میں حقیقت پسندانہ وقت طے کرتے ہیں اور ہمیشہ بروقت مطلع رکھتے ہیں۔",
  "Gray structure timelines depend on the size of the house, number of floors, and weather (monsoon season slows curing and casting). We give a realistic schedule in the written contract rather than an attractive number just to win the job — and we tell you as early as possible if something is likely to run over": "گرے اسٹرکچر کا دورانیہ مکان کے سائز، منزلوں اور موسم پر منحصر ہوتا ہے۔ ہم ہمیشہ تحریری معاہدے میں حقیقی وقت کا تعین کرتے ہیں۔",
  "HOME BUILDERS IN LAHORE": "لاہور میں ہوم بلڈرز",
  "HOUSE CONSTRUCTION & GRAY STRUCTURE IN LAHORE": "لاہور میں گھر کی تعمیر اور گرے اسٹرکچر",
  "HOUSE RENOVATION IN LAHORE": "لاہور میں مکان کی تزئین و آرائش",
  "HOUSE-READY CONTRACTOR IN LAHORE": "لاہور میں ریڈی ہاؤس کنٹریکٹر",
  "Handover": "چابی کی سپردگی",
  "Handover includes a joint walkthrough with the client, a documented snag list of anything to be corrected, and confirmation of what is covered under the workmanship period stated in the contract": "چابی کی سپردگی میں کلائنٹ کے ساتھ مشترکہ معائنہ، تسلی بخش کوالٹی چیک اور وارنٹی پیریڈ کی تصدیق شامل ہے۔",
  "Handover includes a joint walkthrough with the client, a documented snag list of anything to be corrected, and confirmation of what is covered under the workmanship period stated in the contract.": "ہینڈ اوور کے وقت کسٹمر کے ساتھ مکمل معائنہ کیا جاتا ہے اور ہر چھوٹی کمی بیشی کو تحریری معاہدے کے مطابق فوری دور کیا جاتا ہے۔",
  "Have a plot in Lahore and want to start building?": "لاہور میں پلاٹ ہے اور تعمیر شروع کرنا چاہتے ہیں؟",
  "Heavy load-bearing columns, basement excavations, commercial shop fronts, and durable commercial finishes in Lahore.": "لاہور میں ہیوی لوڈ بیرنگ کالمز، بیسمنٹ کی کھدائی، کمرشل دکانیں اور پائیدار فنشنگ۔",
  "Heavy-load RCC columns, grade-60 steel reinforcement, and certified masonry framework.": "ہیوی لوڈ آر سی سی کالمز، گریڈ-60 اسٹیل ری انفورسمنٹ اور معیاری چنائی کا فریم ورک۔",
  "Hiring workers through us vs. hiring individually": "ہمارے ذریعے لیبر لینے اور انفرادی مزدور رکھنے کا موازنہ",
  "Home": "صفحۂ اول",
  "Home Builders": "ہوم بلڈرز",
  "Home Builders in Lahore": "لاہور میں ہوم بلڈرز",
  "Home Builders is our full house-construction service — from the first site marking to the day you get the keys — handled by the same family and team throughout, so there's one point of contact and one point of responsibility.": "ہوم بلڈرز ہماری مکمل مکان تعمیراتی سروس ہے — زمین کی پہلی نشاندہی سے لے کر چابی کی سپردگی تک — ایک ہی مستند ٹیم ہر مرحلے کی براہ راست ذمہ دار ہوتی ہے۔",
  "Home Renovation & Repair": "گھر کی رینوویشن اور مرمت",
  "House Builders Lahore": "ہاؤس بلڈرز لاہور",
  "House Construction": "ہاؤس کنسٹرکشن",
  "House Construction / Gray Structure": "مکان کی تعمیر / گرے اسٹرکچر",
  "House Renovation": "ہاؤس رینوویشن",
  "House Renovation & Remodeling": "گھر کی مکمل رینوویشن اور ری ماڈلنگ",
  "House Renovation in Lahore": "لاہور میں مکان کی رینوویشن",
  "House-Ready Contractor": "ریڈی ہاؤس کنٹریکٹر",
  "House-ready\\\" means we take responsibility for the full sequence of trades — structure, plumbing/electrical, finishing, flooring — so what you get at the end is a livable house, not a shell with a list of leftover jobs.": "\\\"ریڈی ہاؤس\\\" کا مطلب ہے کہ ہم تعمیر کے ہر شعبے کی مکمل ذمہ داری لیتے ہیں — اسٹرکچر، پلمبنگ، بجلی، فنشنگ، فرش — تاکہ آپ کو ادھورا کام نہیں بلکہ مکمل تیار گھر ملے۔",
  "How it continues today": "آج ہمارا طریقہ کار",
  "How it started": "ہماری شروعات اور تاریخ",
  "How we approach a marble job": "ہمارا طریقہ کار",
  "How we approach a tiling job": "ٹائل کے کام میں ہمارا طریقہ کار",
  "How we inspect before quoting": "کوٹیشن سے پہلے ہمارا معائنہ",
  "How we talk about our own work": "ہمارے کام اور معاہدے کی شفافیت",
  "In short:": "مختصراً:",
  "Instant real-time estimate for your plot based on current market material and labor rates in Lahore.": "لاہور کے مارکیٹ ریٹس پر اپنے پلاٹ کی تعمیراتی لاگت کا فوری تخمینہ۔",
  "Key Feature": "اہم خصوصیات",
  "Kitchen Tiles Work & Wall Installation": "کچن ٹائلز اور وال انسٹالیشن کا معیاری کام",
  "Kitchen and bathroom floor and wall tiling": "کچن اور باتھ روم کے فرش اور دیواروں کی خوبصورت ٹائلنگ",
  "Kitchen wall and backsplash tiling": "کچن کی دیواروں اور کاؤنٹر بیک سپلیش کی خوبصورت ٹائلنگ",
  "Labour we know, not labour we've just hired for your job.": "ہماری اپنی قابل اعتماد اور باقاعدہ لیبر، نہ کہ عارضی مزدور۔",
  "Lahore House Construction Cost Estimator 2026": "لاہور مکان تعمیراتی لاگت کیلکولیٹر 2026",
  "Lahore, Punjab, Pakistan": "لاہور، پنجاب، پاکستان",
  "Laser or string-line alignment for razor-straight grout joints": "لیزر اور ڈوری کے ذریعے جوڑوں کی بالکل سیدھی الائنمنٹ",
  "Laser-level tile flooring, porcelain wall tiles, kitchen countertops, stair steps, and granite/marble polishing.": "لیزر لیول ٹائل فلورنگ، پورسلین ٹائلز، کچن کاؤنٹر ٹاپس، سیڑھیاں اور گرینائٹ/ماربل پالش۔",
  "Laser-leveled porcelain tile laying, seamless border margins, and polished marble surfaces.": "لیزر لیول پورسلین ٹائلز، بارڈر مارجنز اور چمکدار پالش شدہ ماربل۔",
  "Last updated: 2026. This page applies to the website lahore-construction.work.gd, operated by Al-Rukan Builders / House Builders Lahore.": "آخری اپ ڈیٹ: 2026۔ یہ صفحہ الرکن بلڈرز / ہاؤس بلڈرز لاہور کی آفیشل ویب سائٹ lahore-construction.work.gd کے لیے لاگو ہے۔",
  "Learn More →": "مزید تفصیلات →",
  "Legally binding fixed milestone contract. Zero hidden charges": "قانونی و تحریری معاہدہ، زیرو پوشیدہ اخراجات",
  "Let us inspect it before you decide what to fix.": "فیصلہ کرنے سے پہلے ہماری ٹیم کو معائنہ کرنے دیں۔",
  "Let's discuss your plan, budget and timeline honestly, before anything is signed.": "آئیں کسی بھی معاہدے سے پہلے آپ کے پلان، بجٹ اور شیڈول پر ایمانداری سے بات کریں۔",
  "Level substrate before placing any tile": "ٹائل لگانے سے پہلے بیس کو مکمل ہموار اور لیول کرنا",
  "Light": "لائٹ موڈ",
  "Light Mode": "لائٹ موڈ",
  "Living room, bedroom and courtyard flooring": "ڈرائنگ روم، بیڈ روم اور صحن کے لیے پائیدار فرش بندی",
  "MARBLE FITTING WORK IN LAHORE": "لاہور میں ماربل فٹنگ کا کام",
  "Main Canal Road / Allama Iqbal Town, Lahore, Punjab, Pakistan": "مین کینال روڈ / علامہ اقبال ٹاؤن، لاہور، پنجاب، پاکستان",
  "Maintenance after fitting": "فٹنگ کے بعد دیکھ بھال",
  "Managed on site daily by Muhammad Mushtaq & Asad Ali": "محمد مشتاق اور اسد علی کی جانب سے روزانہ موقع پر نگرانی",
  "Manager": "مینیجر",
  "Manager — client coordination & scheduling": "منیجر — کسٹمر رابطہ اور شیڈولنگ",
  "Manager: 0309 1401400": "منیجر: 0309 1401400",
  "Many clients come to us with just a plot and a rough idea. As home builders, we help carry that plot through:": "اکثر کسٹمرز محض ایک خالی پلاٹ اور ابتدائی خیال کے ساتھ آتے ہیں۔ بطور ہوم بلڈرز ہم اس پلاٹ کو ایک شاندار گھر میں تبدیل کرتے ہیں:",
  "Many renovation jobs happen while a family is still living in the house. We plan work in stages — room by room or floor by floor where possible — and discuss dust, water and electricity cut-off timing with the family in advance rather than surprising them": "اگر فیملی گھر میں رہ رہی ہو تو ہم مرحلہ وار (کمرہ بہ کمرہ) کام کرتے ہیں اور پانی و بجلی کی سپلائی کے اوقات پہلے سے طے کرتے ہیں تاکہ فیملی کو پریشانی نہ ہو۔",
  "Many renovation jobs happen while a family is still living in the house. We plan work in stages — room by room or floor by floor where possible — and discuss dust, water and electricity cut-off timing with the family in advance rather than surprising them.": "بہت سے رینوویشن کے کام گھر میں خاندان کی رہائش کے دوران ہوتے ہیں۔ ہم کام کو مرحلہ وار پلان کرتے ہیں تاکہ پانی، بجلی اور گرد و غبار سے فیملی کو کم سے کم پریشانی ہو۔",
  "Marble Fitting": "ماربل فٹنگ",
  "Marble Fitting Work": "ماربل فٹنگ کا کام",
  "Marble Fitting Work in Lahore": "لاہور میں ماربل فٹنگ کا کام",
  "Marble cladding for walls, counters and facades": "دیواروں، کچن کاؤنٹرز اور فرنٹ ایلیویشن کے لیے ماربل کلیڈنگ",
  "Marble fitters for flooring, staircases and cladding": "فرش، سیڑھیوں اور دیواروں کے ماہر ماربل فٹرز",
  "Marble flooring for living rooms, halls and bedrooms": "ڈرائنگ روم، ہال اور بیڈ رومز کے لیے خوبصورت ماربل فلورنگ",
  "Marble is expensive to get wrong — mismatched veining, uneven joints and a floor that isn't level will show for as long as the marble is down. Our marble fitters take the extra time this material needs.": "ماربل کا غلط لگنا بڑا نقصان دہ ہوتا ہے — ناموزوں ریشے اور اونچے نیچے جوڑ ساری زندگی نظر آتے ہیں۔ ہمارے ماہر کاریگر ماربل کے نفیس کام پر خصوصی توجہ دیتے ہیں۔",
  "Marble that's matched, levelled and jointed the way it should be.": "ماربل کی درست لیولنگ، کٹنگ اور ہموار فٹنگ۔",
  "Marble work we handle": "ماربل کا کام جو ہم کرتے ہیں",
  "Mason (raj mistri) for brickwork, plaster and structural work": "چنائی، پلستر اور اسٹرکچر کے ماہر راج مستری",
  "Master Masons (Raj Mistri) for brickwork, blockwork and plaster": "ماہر راج مستری برائے اینٹوں کی چنائی، بلاک ورک اور پلستر",
  "Material & quality approach": "مٹیریل اور کوالٹی پالیسی",
  "Mixes substandard local sand, low-ratio cement & 2nd class bricks": "ناقص ریت، کم سیمنٹ اور دوئم درجے کی اینٹوں کا ملاوٹ شدہ کام",
  "Modernize old houses, replace outdated tiles, bathroom redesign, structural crack fixing, seepage proofing & paint.": "پرانے گھروں کی جدید تزئین و آرائش، نئی ٹائلز، باتھ روم ری ڈیزائن، دراڑوں کی مرمت، سیم کا علاج اور پینٹ۔",
  "Months of unexplained delays; workers disappear to other sites": "مہینوں کی تاخیر اور مزدور دوسری سائٹس پر بھاگ جاتے ہیں",
  "Muhammad Mushtaq": "محمد مشتاق",
  "Multi-story commercial structure with heavy structural load capacity and wide shop frontages.": "ہیوی لوڈ کی گنجائش اور کشادہ دکانوں والا کثیر المنزلہ کمرشل پلازہ۔",
  "Muzamal Malik": "مزمل ملک",
  "Need construction workers in Lahore?": "لاہور میں تعمیراتی کاریگروں کی ضرورت ہے؟",
  "Need reliable, experienced construction workers in Lahore? Al-Rukan Builders provides skilled masons, tile and marble installers, plasterers, and general construction labor under daily, weekly, or project-based contracts.": "کیا آپ کو لاہور میں تجربہ کار اور قابل اعتماد کاریگروں کی ضرورت ہے؟ الرکن بلڈرز ماہر مستری، ٹائل و ماربل فٹرز، پلستر والے اور لیبر ٹیم فراہم کرتا ہے۔",
  "Need supervised construction labour in Lahore?": "لاہور میں بااعتماد اور زیرِ نگرانی تعمیراتی لیبر چاہیے؟",
  "Need tiling done in Lahore?": "لاہور میں ٹائلز کا کام کروانا چاہتے ہیں؟",
  "Neither Al-Rukan Builders nor any member of our team is responsible for:": "الرکن بلڈرز اور ہماری ٹیم درج ذیل معاملات کی ذمہ دار نہیں ہے:",
  "No call centre, no sales agent — you speak directly with the owner, manager or engineer handling projects in Lahore.": "کوئی کال سینٹر یا نمائندہ نہیں — آپ کی براہ راست بات ہمارے اونر، مینیجر یا سائٹ انجینئر سے ہوتی ہے۔",
  "Office Address": "دفتر کا پتہ",
  "Official Email Correspondence": "سرکاری ای میل رابطہ",
  "Old vs. new construction standards": "پرانی بمقابلہ جدید تعمیراتی تکنیک",
  "Older Lahore houses were often built to different standards (thinner walls, different foundation depth, older material). Where we tie new work into an old structure, our engineer accounts for this rather than assuming the old structure will simply support new load the same way a fresh structure would": "پرانے گھروں کی بنیادیں اور دیواریں موجودہ دور سے مختلف ہوتی ہیں۔ نئی منزل یا بوجھ ڈالتے وقت انجینئر مکمل چیک کرتا ہے کہ پرانا اسٹرکچر اس وزن کو سنبھالنے کے قابل ہے یا نہیں۔",
  "Older Lahore houses were often built to different standards (thinner walls, different foundation depth, older material). Where we tie new work into an old structure, our engineer accounts for this rather than assuming the old structure will simply support new load the same way a fresh structure would.": "لاہور کے پرانے مکانات کے اسٹرکچر مختلف ہوتے ہیں۔ جب ہم نیا کام پرانے ڈھانچے کے ساتھ جوڑتے ہیں، تو ہمارے انجینئر وزن اور بنیاد کا باریک بینی سے حساب لگاتے ہیں۔",
  "One written contract covering the agreed scope, rather than separate verbal deals per trade": "ایک باضابطہ تحریری معاہدہ جس میں تمام کاموں کی تفصیل واضح ہو",
  "Our Work": "ہمارا کام",
  "Our labour is supervised on site by Muzamal Malik and reviewed at key stages by engineer Tajamal Malik — work is not left unsupervised between visits from the owner or manager.": "ہماری لیبر کی نگرانی موقع پر مزمل ملک کرتے ہیں اور انجینئر تجمل ملک اہم مراحل پر معائنہ کرتے ہیں — کام کبھی بھی بغیر نگرانی نہیں چھوڑا جاتا۔",
  "Our standard for tile installation": "ٹائل فٹنگ کا ہمارا معیار",
  "Our team's direct numbers": "ہماری ٹیم کے براہ راست رابطہ نمبرز",
  "Our work in construction goes back more than 40 years to Experienced Master Builders (Est. 1984), who built and repaired homes across Lahore at a time when there was no website, no advertising — only word of mouth from one satisfied family to the next. That reputation, built house by house, is what this company still stands on.": "ہمارا تعمیراتی تجربہ 40 سال سے زائد پر محیط ہے، جب 1984 میں تجربہ کار معماروں نے لاہور بھر میں گھر تعمیر کیے۔ اُس وقت کوئی انٹرنیٹ نہیں تھا، صرف ایک مطمئن خاندان کی دوسرے خاندان کو دی گئی سفارش تھی۔ یہی نیک نامی آج بھی ہمارے کاروبار کی بنیاد ہے۔",
  "Owner": "اونر / مالک",
  "Owner — final responsibility on every contract": "مالک — ہر معاہدے کے حتمی ذمہ دار",
  "Owner: 0305 4302352": "مالک: 0305 4302352",
  "Page Not Found": "معذرت! یہ صفحہ دستیاب نہیں ہے",
  "Painters and finishing labour": "ماہر پینٹرز اور فنشنگ لیبر",
  "Planning house construction in Lahore?": "لاہور میں مکان کی تعمیر کا ارادہ ہے؟",
  "Planning marble flooring or a staircase?": "ماربل فلورنگ یا سیڑھیوں کے کام کا ارادہ ہے؟",
  "Planning marble work in Lahore?": "لاہور میں ماربل کے کام کا منصوبہ ہے؟",
  "Planning tile work in Lahore?": "لاہور میں ٹائل کے کام کی منصوبہ بندی کر رہے ہیں؟",
  "Plaster, damp-proofing and internal/external finishing": "سیمنٹ پلستر، ڈیمپ پروفنگ (سیلاب/نمی سے بچاؤ) اور اندرونی و بیرونی فنشنگ",
  "Plumbers and electricians for rough-in and finishing installations": "پلمبنگ اور الیکٹریکل کے تجربہ کار ٹیکنیشنز",
  "Polishing and restoring existing marble floors": "موجودہ ماربل فرش کی گرائنڈنگ، کیمیکل پالش اور چمک بحال کرنا",
  "Precision kitchen tile alignment, high-grade adhesive, and moisture-resistant wall joints.": "کچن ٹائلز کی درست سیدھ، اعلیٰ کوالٹی بانڈ اور نمی سے محفوظ دیواریں اور جوڑ۔",
  "Premium Flooring — Tiles & Marble Work": "پریمیم فرش بندی — ٹائلز اور ماربل ورک",
  "Pricing": "قیمت اور اخراجات",
  "Pricing & Billing": "ریٹس اور ادائیگی کا طریقہ",
  "Privacy & Disclaimer": "پرائیویسی اور ڈس کلیمر",
  "Privacy & Disclaimer page": "پرائیویسی اور ڈس کلیمر صفحہ",
  "Privacy Policy": "پرائیویسی پالیسی",
  "Privacy Policy & Disclaimer": "پرائیویسی پالیسی اور ڈس کلیمر",
  "Project Manager & Direct Lead": "پروجیکٹ منیجر اور کسٹمر رابطہ",
  "Project Timeline": "منصوبے کا شیڈول اور مدت",
  "Proper slope in bathrooms and terraces to prevent stagnant water": "باتھ روم اور چھت پر مناسب ڈھلوان تاکہ پانی بالکل نہ رکے",
  "Punctual, honest and vetted workforce with proven track records": "وقت کے پابند، ایماندار اور سالہا سال سے ہمارے ساتھ منسلک کاریگر",
  "Quality Construction Without Shortcuts.": "بغیر کسی کوتاہی اور شارٹ کٹ کے معیاری تعمیر۔",
  "Re-plastering and re-wiring/re-plumbing where required": "نیا پلستر، الیکٹریکل وائرنگ اور پائپ لائن کی مکمل تبدیلی",
  "Ready House": "تیار گھر",
  "Ready House — Complete Turnkey Execution": "تیار گھر — مکمل ٹرن کی پروجیکٹ",
  "Ready to build a house in Lahore?": "لاہور میں گھر بنانے کے لیے تیار ہیں؟",
  "Real Lahore projects, not stock photos.": "لاہور کے اصلی پروجیکٹس، نہ کہ انٹرنیٹ سے لی گئی تصاویر۔",
  "Related services": "متعلقہ خدمات",
  "Removing and replacing old flooring with new tiles or marble": "پرانے فرش کو اکھاڑ کر جدید ٹائلز یا ماربل کی نئی فٹنگ",
  "Renovating a home in Lahore?": "لاہور میں گھر کی رینوویشن چاہتے ہیں؟",
  "Renovation": "رینوویشن",
  "Renovation of existing shops — new front, flooring, electrical upgrade": "موجودہ دکانوں کی رینوویشن — جدید فرنٹ، نیا فرش، اور الیکٹریکل اپ گریڈ",
  "Renovation work is where honesty matters most. Old Lahore homes often hide real structural issues behind fresh paint. We inspect properly before quoting, so you know if you're fixing a wall or fixing the reason the wall keeps cracking.": "رینوویشن میں سب سے اہم چیز ایمانداری ہے۔ لاہور کے پرانے گھروں میں اکثر پینٹ کے پیچھے گہری خرابیاں چھپی ہوتی ہیں۔ ہم تفصیلی معائنہ کر کے اصل وجہ بتاتے ہیں۔",
  "Repair and replacement of loose, broken, or hollow tiles": "ڈھیلی، ٹوٹی ہوئی یا کھوکھلی ٹائلز کی مرمت اور تبدیلی",
  "Replacement guarantee if a worker's performance is not satisfactory": "اگر کسی ورکر کا کام تسلی بخش نہ ہو تو فوری متبادل فراہم کیا جاتا ہے",
  "Replacing old, dull or damaged marble flooring": "پرانے، مدہم یا خراب ماربل فرش کو تبدیل کرنا",
  "Request Free Site Visit & Quote": "مفت سائٹ وزٹ اور کوٹیشن کی درخواست کریں",
  "Retiling over old, cracked or outdated floors during renovation": "رینوویشن کے دوران پرانے یا ٹوٹے ہوئے فرش پر نئی ٹائلز لگانا",
  "Rough timeline you're hoping for": "کام کی تکمیل کا متوقع وقت",
  "SERVING LAHORE SINCE 1984 • 40+ YEARS": "لاہور میں خدمت کے 40+ سال • 1984 سے قائم",
  "SHOP CONSTRUCTION BUILDERS IN LAHORE": "لاہور میں شاپ اور کمرشل تعمیرات",
  "See Completed Houses": "مکمل شدہ مکانات دیکھیں",
  "Send Request via WhatsApp 🚀": "واٹس ایپ پر درخواست بھیجیں 🚀",
  "Send an Email": "ای میل بھیجیں",
  "Send us room dimensions or arrange a site visit for an accurate quote.": "درست کوٹیشن کے لیے کمروں کے سائز بھیجیں یا سائٹ وزٹ کا وقت طے کریں۔",
  "Send us your floor/wall measurements or arrange a site visit.": "درست تخمینے کے لیے پیمائش بھیجیں یا فری سائٹ وزٹ حاصل کریں۔",
  "Senior Site Contractor & Supervision": "سینئر سائٹ کنٹریکٹر اور نگرانی",
  "Sequencing structure, electrical/plumbing rough-in and finishing in the right order": "اسٹرکچر، الیکٹریکل، پلمبنگ اور فنشنگ کو درست ترتیب میں سرانجام دینا",
  "Service area": "سروس کا علاقہ",
  "Service area:": "سروس کا دائرہ کار:",
  "Services": "خدمات",
  "Shop Construction": "شاپ کنسٹرکشن",
  "Shop Construction Builders": "دکان و پلازہ بلڈرز",
  "Shop shells — structure, frontage and internal walls for a new shop": "شاپ شیلز — نئی دکان کے لیے بنیادی اسٹرکچر، فرنٹ ایلیویشن اور اندرونی دیواریں",
  "Shops & Commercial Plazas": "دکانیں اور کمرشل پلازے",
  "Shops and small commercial spaces, built around your business, not a generic layout.": "دکانیں اور کمرشل جگہیں، آپ کے کاروبار کی ضروریات کے عین مطابق۔",
  "Showroom fit-outs, including flooring (tiles/marble) and finishing": "شوروم فٹ آؤٹس، بشمول پریمیم فرش (ٹائلز/ماربل) اور خوبصورت فنشنگ",
  "Single Story": "سنگل اسٹوری (ایک منزلہ)",
  "Site Lead": "سائٹ انچارج",
  "Site layout and marking according to the approved house plan": "منظور شدہ نقشے کے مطابق پلاٹ کی درست نشاندہی اور لے آؤٹ",
  "Site layout, foundation and gray structure (see our gray structure page)": "سائٹ لے آؤٹ، مضبوط بنیادیں اور معیاری گرے اسٹرکچر (گرے اسٹرکچر کی تفصیلات دیکھیں)",
  "Skilled Mason & Labor Supply": "ہنر مند مستری اور لیبر کی فراہمی",
  "Skilled masons, tile fitters and construction workers for your project.": "آپ کے پروجیکٹ کے لیے تجربہ کار راج مستری، ٹائل فٹرز اور محنتی لیبر۔",
  "Small office and commercial building construction": "چھوٹے دفاتر اور کمرشل عمارتوں کی مکمل تعمیر",
  "Solid RCC framework, water tanks, underground reservoirs, boundary walls, and weather-proof plastering.": "مضبوط آر سی سی فریم ورک، واٹر ٹینک، زیر زمین حوض، چاردیواری اور واٹر پروف پلستر۔",
  "Some clients ask whether they should hire mistiris directly instead of through a company. Direct hiring can be cheaper on paper, but the client then carries the responsibility for coordinating trades, checking quality and resolving disputes on their own. Hiring our labour as part of a supervised contract means one company — ours — is accountable for the standard of work and for correcting mistakes at our cost, as agreed in the contract.": "اکثر لوگ پوچھتے ہیں کہ مزدور خود رکھیں یا کمپنی کے ذریعے؟ براہ راست مزدور رکھنے میں تمام تر ذمہ داری اور سردردی آپ پر ہوتی ہے۔ جبکہ ہمارے پاس کمپنی معیار اور کام کی مکمل تحریری ذمہ دار ہوتی ہے۔",
  "Staircase construction": "آر سی سی سیڑھیوں کی درست پیمائش کے ساتھ مضبوط تعمیر",
  "Staircase marble fitting, including edges and nosing": "سیڑھیوں پر ماربل کی مکمل فٹنگ، بشمول گول نوزنگ اور ایجز",
  "Staircase tiling and skirting": "سیڑھیوں کی ٹائلنگ اور اسکرٹنگ",
  "Start to End": "شروع سے اختتام تک",
  "Start to End — Complete Turnkey Construction": "شروع سے اختتام تک — مکمل ٹرن کی تعمیر",
  "Starting construction on a plot in Lahore?": "لاہور میں پلاٹ پر تعمیر شروع کرنے کا ارادہ ہے؟",
  "Steel & Structural Integrity": "اسٹیل اور اسٹرکچر کی مضبوطی",
  "Steel fixers and shuttering carpenters for concrete slabs": "چھت کے لینٹر کے لیے ماہر شٹرنگ کارپینٹرز اور سریا باندھنے والی ٹیم",
  "Steel-fixer and shuttering labour for RCC work": "آر سی سی چھت اور کالمز کے لیے اسٹیل فکسرز اور شٹرنگ لیبر",
  "Strictly Grade-60 certified steel with lab test verification": "لیب ٹیسٹ شدہ سرٹیفائیڈ گریڈ-60 اسٹیل سریا",
  "Structural repair of cracked or weakened walls, beams and columns": "دیواروں، بیمز اور پلرز کی دراڑوں اور کمزوری کی تکنیکی مرمت",
  "Supervisor & Advisor": "سپروائزر اور ایڈوائزر",
  "Supervisor & Advisor — day-to-day site supervision": "سپروائزر اور ایڈوائزر — روزانہ سائٹ پر موجودگی",
  "TILES WORK IN LAHORE": "لاہور میں ٹائلز ورک",
  "Tajamal Malik": "تجمل ملک",
  "Talk to the builder directly": "براہ راست بلڈر سے رابطہ کریں",
  "Talk to the people doing the work.": "براہ راست کام کرنے والی ٹیم سے رابطہ کریں۔",
  "Talk to us about a house-ready, turnkey contract.": "مکمل تیار گھر اور ٹرن کی معاہدے کے لیے ہم سے رابطہ کریں۔",
  "Tell us the trade and rough timeline — we'll confirm availability quickly.": "مطلوبہ کام اور متوقع وقت بتائیں — ہم فوری دستیابی سے آگاہ کریں گے۔",
  "Tell us your business type and timeline — we'll plan around it.": "اپنے کاروبار کی قسم اور مطلوبہ وقت بتائیں — ہم اسی مطابق منصوبہ بنائیں گے۔",
  "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.": "آپ کا مطلوبہ صفحہ تبدیل ہو چکا ہے یا موجود نہیں ہے۔ آپ صفحۂ اول پر جا سکتے ہیں یا ہم سے براہ راست رابطہ کر سکتے ہیں۔",
  "The part of a house you never see again — built to be checked once, right.": "گھر کا وہ بنیادی حصہ جو دوبارہ کبھی سامنے نہیں آتا — اسے پہلی بار ہی پرفیکٹ بننا چاہیے۔",
  "The team you actually deal with": "ہماری وہ بااعتماد ٹیم جو آپ کے ساتھ کام کرے گی",
  "The trades our labour team covers": "ہماری لیبر ٹیم کی فراہم کردہ خدمات",
  "This is for a client who wants one company to be answerable for the whole house — not just the walls, or just the tiling. It suits both a family building their own home to live in, and an investor building to sell or rent.": "یہ ان کسٹمرز کے لیے بہترین ہے جو پورے گھر کی تعمیر کے لیے ایک ہی ذمہ دار کمپنی چاہتے ہیں۔ یہ رہائش کے لیے گھر بنانے والی فیملیز اور فروخت یا کرایہ کے لیے بنانے والے انویسٹرز دونوں کے لیے یکساں موزوں ہے۔",
  "This site may use basic, standard website analytics (such as visit counts) to understand how it is used. It does not knowingly collect sensitive personal data, and it is not directed at children.": "یہ ویب سائٹ صرف بنیادی وزیٹر ٹریفک اینالیٹکس استعمال کرتی ہے اور کوئی حساس ذاتی ڈیٹا محفوظ نہیں کرتی۔",
  "This website is published only to share business information about Al-Rukan Builders (House Builders Lahore) — who we are, the services we offer in Lahore, and how to contact us. It is not a booking system, payment platform, or e-commerce site, and it does not process any online transaction, payment, or booking on behalf of visitors.": "یہ ویب سائٹ صرف الرکن بلڈرز کے تعارف اور رابطے کے لیے ہے۔ یہ کوئی آن لائن ادائیگی یا بکنگ سسٹم نہیں ہے۔ تمام معاملات باقاعدہ فزیکل ملاقات میں طے پاتے ہیں۔",
  "Tile & Marble Installers with precision cutting and leveling equipment": "جدید کٹنگ اور لیول مشینوں سے لیس ٹائل اور ماربل فٹرز",
  "Tile fitters for floor and wall tiling": "فرش اور دیواروں کے ماہر ٹائل کاریگر",
  "Tiles & Kitchen": "ٹائلز اور کچن",
  "Tiles & Marble": "ٹائلز اور ماربل",
  "Tiles & Marble Fitting": "ٹائلز اور ماربل فٹنگ",
  "Tiles & Marble Renovation & Elevation": "ٹائلز و ماربل رینوویشن اور خوبصورت ایلیویشن",
  "Tiles Work": "ٹائلز ورک",
  "Tiles Work in Lahore": "لاہور میں ٹائلز کا کام",
  "Tiles services we provide": "ٹائلز کی خدمات جو ہم پیش کرتے ہیں",
  "Tiling cost in Lahore depends on the tile brand/size chosen, the area to be covered, and the condition of the existing floor. We give a written estimate after seeing the site — we do not quote a fixed \"per square foot\" number online because it changes site to site.": "لاہور میں ٹائل کے اخراجات سائز، برانڈ اور رقبے پر منحصر ہوتے ہیں۔ ہم سائٹ دیکھ کر تحریری کوٹیشن دیتے ہیں تاکہ کوئی ابہام نہ رہے۔",
  "Tiling done level, jointed clean, finished properly.": "درست لیول، صفائی ستھرائی اور پیشہ ورانہ فنشنگ کے ساتھ ٹائل ورک۔",
  "Tiling looks simple until it's finished badly — hollow tiles that crack when something heavy drops, grout lines that wave across the room, and slopes in wet areas that leave water pooling in corners. We do tiling properly from the substrate up.": "ٹائلز کا کام آسان لگتا ہے مگر ذرا سی لاپرواہی سے ٹائلز کھوکھلی رہ جاتی ہیں، جوڑ ٹیڑھے ہو جاتے ہیں اور باتھ روم میں پانی کھڑا رہتا ہے۔ ہم بیس تیار کرنے سے لے کر فائنل گرافٹنگ تک مکمل معیار سے کام کرتے ہیں۔",
  "Time To Move In — Ready Luxury Home": "شفٹ ہونے کے لیے تیار — شاندار تیار گھر",
  "Timeline": "تعمیراتی دورانیہ",
  "To build well, we need clear decisions on layout, budget for finishing (tiles/marble grade, fittings) and a realistic payment schedule tied to work stages. We would rather have this conversation honestly up front than promise a number we know we can't hold to later.": "بہترین تعمیر کے لیے، ہمیں لے آؤٹ پر واضح فیصلوں، فنشنگ بجٹ اور کام کے مراحل سے منسلک شفاف پیمنٹ شیڈول کی ضرورت ہوتی ہے۔ ہم پہلے دن سے ہی صاف اور حقیقت پسندانہ بات کو ترجیح دیتے ہیں۔",
  "Today the same family runs the business. Muhammad Mushtaq is the owner and takes overall responsibility for every contract we sign. Asad Ali manages client communication, contracts, and day-to-day operations. Engineer Tajamal Malik handles structural review, site inspections and drawings. Muzamal Malik supervises on-site teams and advises on material and finishing.": "آج بھی وہی فیملی اس ادارے کو چلا رہی ہے۔ محمد مشتاق صاحب بطور اونر ہر معاہدے کی حتمی ذمہ داری لیتے ہیں۔ اسد علی کسٹمر ریلیشنز اور آپریشنز سنبھالتے ہیں۔ انجینئر تجمل ملک اسٹرکچرل ڈیزائن اور سائٹ کا معائنہ کرتے ہیں، جبکہ مزمل ملک فیلڈ سپروائزر ہیں۔",
  "Transforming aging structures into modern, functional living spaces with structural upgrades.": "پرانے مکانات کو جدید سہولیات، مضبوط ڈھانچے اور دلکش ڈیزائن میں تبدیل کرنا۔",
  "Turnkey Houses": "مکمل تیار گھر (ٹرن کی)",
  "Turnkey project fully equipped with ceilings, ambient lighting, woodwork, and fine detailing.": "فال سیلنگ، لائٹنگ، ووڈ ورک اور شاندار باریکیوں سے لیس مکمل تیار پروجیکٹ۔",
  "Uses unbranded rerolled / 40-grade weak steel (high risk)": "غیر معیاری لوکل یا 40-گریڈ کمزور سریا کا استعمال (انتہائی خطرناک)",
  "Verified Lahore Construction & Renovation Projects": "لاہور میں ہماری تعمیراتی و رینوویشن سائٹس کی مصدقہ تصاویر",
  "View Our Work": "ہمارا کام دیکھیں",
  "Want one contractor responsible for the whole house?": "پورے گھر کے لیے ایک ہی بااعتماد ٹھیکیدار چاہتے ہیں؟",
  "Want to see how we work before you commit?": "کام شروع کرنے سے پہلے ہمارا معیار دیکھنا چاہتے ہیں؟",
  "We are a working construction outfit, not a booking platform. Our scope covers full house construction from foundation to finishing, gray structure work, structural repair and renovation of older Lahore houses, and finishing trades — tiles and marble fitting — for both homes and small commercial buildings such as shops and showrooms. We keep our own labour rather than hiring unknown teams job to job, because consistency of workmanship matters more to us than taking on every job that comes our way.": "ہم ایک حقیقی فیلڈ کنسٹرکشن فرم ہیں۔ ہمارے کام کے دائرہ کار میں مکمل مکان کی تعمیر، گرے اسٹرکچر، پرانے مکانات کی رینوویشن اور مرمت، اور ٹائلز و ماربل فٹنگ شامل ہیں۔ ہم کام کے مستقل معیار پر سمجھوتہ نہیں کرتے۔",
  "We can build the gray structure alone if you have your own finishing team, or continue through plaster, electrical/plumbing chasing, flooring and paint as a complete house construction project. Either way, engineer Tajamal Malik reviews steel, concrete mix and curing at each stage — this is not left only to the mason": "ہم صرف گرے اسٹرکچر بھی بناتے ہیں اور مکمل فنشنگ بھی۔ انجینئر تجمل ملک سریے کا جال، سیمنٹ ریشو اور پانی کی ترائی کا باقاعدہ خود معائنہ کرتے ہیں۔",
  "We can build the gray structure alone if you have your own finishing team, or continue through plaster, electrical/plumbing chasing, flooring and paint as a complete house construction project. Either way, engineer Tajamal Malik reviews steel, concrete mix and curing at each stage — this is not left only to the mason.": "اگر آپ کے پاس فنشنگ کی اپنی ٹیم ہے تو ہم صرف گرے اسٹرکچر تیار کر سکتے ہیں، یا مکمل فنشنگ کے ساتھ پورا گھر تعمیر کر سکتے ہیں۔ دونوں صورتوں میں انجینئر تجمل ملک ہر مرحلے پر معیار کی تصدیق خود کرتے ہیں۔",
  "We can source marble through our regular suppliers or work with marble you've already selected or purchased yourself. If you ask us, we'll give an honest opinion on which grade suits the traffic and use of a particular room — for example, a harder-wearing option for a main hallway versus a decorative option for a low-traffic feature wall": "آپ اپنی پسند کا ماربل خود بھی لا سکتے ہیں یا ہمارے سپلائرز سے معیاری ریٹ پر حاصل کر سکتے ہیں۔ ہم آپ کو کمرے کے استعمال کے لحاظ سے بہترین ماربل کا مخلصانہ مشورہ دیتے ہیں۔",
  "We can source marble through our regular suppliers or work with marble you've already selected or purchased yourself. If you ask us, we'll give an honest opinion on which grade suits the traffic and use of a particular room — for example, a harder-wearing option for a main hallway versus a decorative option for a low-traffic feature wall.": "ہم اپنے تصدیق شدہ سپلائرز سے ماربل فراہم کر سکتے ہیں یا آپ کے لائے ہوئے ماربل کو فٹ کر سکتے ہیں۔ ہم کمرے کے استعمال اور ضرورت کے مطابق بہترین ماربل گریڈ کا مخلصانہ مشورہ دیتے ہیں۔",
  "We coordinate this with our own labour and our engineer and supervisor, rather than passing you between different unrelated contractors for each trade.": "ہم یہ سارا کام اپنی ٹیم، مستند انجینئر اور سپروائزر کی زیرِ نگرانی مکمل کرتے ہیں، تاکہ آپ کو الگ الگ ٹھیکیداروں کے پیچھے نہ بھاگنا پڑے۔",
  "We explain basic care after installation — cleaning products to avoid, and how long to wait before heavy furniture is placed — so the finish lasts as it should": "فٹنگ کے بعد ہم ضروری ہدایات دیتے ہیں کہ کون سے کیمیکل صفائی میں استعمال نہیں کرنے اور فرنیچر رکھنے سے پہلے کتنا انتظار کرنا ہے۔",
  "We explain basic care after installation — cleaning products to avoid, and how long to wait before heavy furniture is placed — so the finish lasts as it should.": "ہم انسٹالیشن کے بعد صفائی اور دیکھ بھال کی مکمل رہنمائی فراہم کرتے ہیں تاکہ فرش کی چمک اور مضبوطی طویل عرصے تک قائم رہے۔",
  "We fit floor and wall tiles for both new construction and existing homes across Lahore. This includes:": "ہم لاہور بھر میں نئے مکانات اور رینوویشن دونوں کے لیے فرش اور دیواروں کی ٹائلز لگاتے ہیں:",
  "We respond on WhatsApp as soon as possible.": "ہم واٹس ایپ پر جلد از جلد جواب دیتے ہیں۔",
  "We take on a limited number of active sites at a time so our own supervisor can actually visit each one regularly — we don't overcommit labour across too many projects at once. Call or WhatsApp us to check current availability for your area and timeline.": "ہم بیک وقت محدود پروجیکٹس لیتے ہیں تاکہ ہمارے سپروائزر ہر سائٹ پر روزانہ ذاتی توجہ دے سکیں۔ اپنے علاقے کے لیے دستیابی معلوم کرنے کیلئے رابطہ کریں۔",
  "We use the cement, steel and brick grades agreed in the contract with the client — we do not substitute cheaper material without telling you. If a client wants to use a specific brand or supplier, we work with that; if not, we recommend material based on what has performed well on our past sites in Lahore's climate and soil conditions": "ہم معاہدے میں طے شدہ برانڈ کا سیمنٹ، گریڈ 60 اسٹیل اور اول اینٹ ہی استعمال کرتے ہیں۔ کسی قسم کا ناقص مٹیریل استعمال نہیں کیا جاتا۔",
  "We use the cement, steel and brick grades agreed in the contract with the client — we do not substitute cheaper material without telling you. If a client wants to use a specific brand or supplier, we work with that; if not, we recommend material based on what has performed well on our past sites in Lahore's climate and soil conditions.": "ہم معاہدے میں طے شدہ برانڈز اور گریڈز ہی استعمال کرتے ہیں، کبھی بھی غیر معیاری میٹریل متبادل کے طور پر نہیں لاتے۔",
  "We usually arrange a free site visit before giving any estimate — measurements on paper are never as accurate as seeing the site.": "ہم ایسٹیمیٹ سے قبل موقع پر مفت وزٹ کرتے ہیں، کیونکہ کاغذ پر پیمائش سائٹ دیکھنے کے برابر نہیں ہو سکتی۔",
  "We won't tell you a house will be \"ready in 30 days\" if the scope and site conditions don't support that — a false handover date helps no one once it's missed. Our written contract states a realistic completion window based on the actual scope agreed, and we update the client if conditions on site (weather, material delays, design changes) affect it.": "ہم جھوٹے وعدے نہیں کرتے۔ ہمارے تحریری معاہدے میں کام کی حقیقت پسندانہ مدت طے ہوتی ہے اور بروقت کام مکمل کیا جاتا ہے۔",
  "We won't tell you a house will be \\\"ready in 30 days\\\" if the scope and site conditions don't support that — a false handover date helps no one once it's missed. Our written contract states a realistic completion window based on the actual scope agreed, and we update the client if conditions on site (weather, material delays, design changes) affect it": "ہم جلد بازی کے جھوٹے وعدے نہیں کرتے۔ اگر کام معیاری چاہیے تو حقیقت پسندانہ وقت دینا ضروری ہے، جس کی مکمل تفصیلات تحریری معاہدے میں درج ہوتی ہیں۔",
  "We work with ceramic, porcelain and vitrified tiles based on what the space needs and the client's budget — we will tell you honestly if a cheaper tile is a false economy for a high-traffic area, rather than simply agreeing to whatever is asked.": "ہم سیرامک، پورسلین اور وٹریفائیڈ ٹائلز پر کلائنٹ کے بجٹ اور ضرورت کے مطابق کام کرتے ہیں اور ہمیشہ مخلصانہ رہنمائی دیتے ہیں۔",
  "We would rather show fewer, real photos of our own completed sites than fill this page with generic images that aren't ours. Photos are added here as projects are completed and clients agree to share them.": "ہم انٹرنیٹ کی جعلی تصاویر دکھانے کے بجائے صرف اپنے ہاتھوں سے بنائے گئے حقیقی پروجیکٹس کی تصدیق شدہ تصاویر شیئر کرتے ہیں۔",
  "We'll tell you what's actually wrong with an old house — not just what's easy to fix.": "ہم آپ کو پرانے گھر کی اصل خرابی بتائیں گے — نہ کہ صرف سطحی عارضی حل۔",
  "What \"full house construction\" means with us": "ہمارے ساتھ \"مکمل مکان کی تعمیر\" کا اصل مطلب",
  "What \"house-ready\" covers": "\"تیار گھر\" کی خدمات میں کیا شامل ہے",
  "What \\\"full house construction\\\" means with us": "ہمارے ساتھ \\\"مکمل مکان کی تعمیر\\\" کا کیا مطلب ہے",
  "What \\\"house-ready\\\" covers": "ریڈی ہاؤس سروس میں کیا شامل ہے",
  "What our tiles work covers": "ہماری ٹائل سروسز کے دائرہ کار میں کیا شامل ہے",
  "What renovation work we take on": "ہم کون سا رینوویشن ورک کرتے ہیں",
  "What this service covers": "اس سروس میں کیا شامل ہے",
  "What we actually do": "ہمارا اصل کام اور دائرہ کار",
  "What we ask from the client": "کسٹمر سے ہماری ضرورت",
  "What we believe": "ہمارے بنیادی اصول",
  "What we build and renovate": "ہم کیا تعمیر اور رینوویٹ کرتے ہیں",
  "What we won't promise": "ہم کیا جھوٹے وعدے نہیں کرتے",
  "WhatsApp": "واٹس ایپ",
  "WhatsApp Manager": "منیجر سے واٹس ایپ رابطہ",
  "WhatsApp Support": "واٹس ایپ سپورٹ",
  "WhatsApp Us": "واٹس ایپ رابطہ",
  "WhatsApp Us Directly": "براہ راست واٹس ایپ کریں",
  "Whether it's a kitchen floor, a bathroom wall, a courtyard, or an entire commercial floor, our tile fitters work under the same supervision as our construction sites — not as a separate, unmanaged trade.": "کچن، باتھ روم، صحن یا کمرشل فلور — ہمارے ٹائل کاریگر ہمارے سائٹ سپروائزر کی براہ راست نگرانی میں کام کرتے ہیں۔",
  "Whether it's new construction, renovation, tiles or marble work": "خواہ نئی تعمیر ہو، رینوویشن ہو یا ٹائلز اور ماربل کا کام",
  "Who this service is for": "یہ سروس کن حضرات کے لیے ہے",
  "Why Choose Us": "الرکن بلڈرز کا انتخاب کیوں کریں؟",
  "Why Hire a Professional Team Instead of a Cheap Thekedaar?": "سستے روایتی ٹھیکیدار کے بجائے پروفیشنل ٹیم کیوں ضروری ہے؟",
  "Why hire through Al-Rukan Builders": "الرکن بلڈرز سے کاریگر حاصل کرنے کا فائدہ",
  "Why sequencing matters": "درست ترتیب کی اہمیت کیوں ہے",
  "Work Gallery": "پروجیکٹ گیلری",
  "Workers we supply": "ہماری فراہم کردہ افرادی قوت",
  "Working around a running business": "چلتے ہوئے کاروبار کے دوران کام",
  "Working in an occupied home": "رہائش کے دوران کام",
  "Your area/location in Lahore": "لاہور میں آپ کا علاقہ / لوکیشن",
  "alrukanbuilders@gmail.com": "alrukanbuilders@gmail.com",
  "any data submitted through third-party tools, links, or platforms not directly controlled by us;": "کسی بھی تھرڈ پارٹی لنک یا پلیٹ فارم کے ذریعے بھیجا جانے والا ڈیٹا جو براہ راست ہمارے کنٹرول میں نہ ہو؛",
  "any transaction, payment, or agreement made outside of a direct, signed contract with our company;": "ہماری کمپنی کے ساتھ دستخط شدہ تحریری معاہدے سے ہٹ کر کی جانے والی کوئی بھی ادائیگی یا لین دین؛",
  "gray structure page": "گرے اسٹرکچر صفحہ",
  "the actions of any person falsely claiming to represent this company online.": "آن لائن کمپنی کی نمائندگی کا جھوٹا دعویٰ کرنے والے کسی بھی شخص کے غیر مجاز اقدامات۔",
  "© 2026 Al-Rukan Builders (House Builders Lahore). Established 1984. All rights reserved.": "© 2026 الرکن بلڈرز (ہاؤس بلڈرز لاہور)۔ 1984 سے قائم۔ جملہ حقوق محفوظ ہیں۔",
  "×": "×",
  "اردو": "اردو",
  "✅ Al-Rukan Builders (Lahore)": "✅ الرکن بلڈرز (لاہور)",
  "✉️": "✉️",
  "❌ Typical Cheap Contractor": "❌ عام سستا ٹھیکیدار",
  "💬 WhatsApp Quick Chat": "💬 واٹس ایپ کوئیک چیٹ",
  "📊 Calculate Home Cost": "📊 لاگت کا تخمینہ لگائیں",
  "📍 Lahore": "📍 لاہور",
  "📍 Lahore, Punjab, Pakistan": "📍 لاہور، پنجاب، پاکستان",
  "📞 Call: 0309 1401400": "📞 کال کریں: 0309 1401400",
  "📲 Get Detailed BOQ & Site Visit on WhatsApp": "📲 واٹس ایپ پر تفصیلی تخمینہ اور وزٹ بک کریں"
  };

  function getLang() {
    try {
      var saved = localStorage.getItem("alrukan_lang");
      if (saved === "ur" || saved === "en") return saved;
    } catch (e) {}
    return "en";
  }

  function getTheme() {
    try {
      var saved = localStorage.getItem("alrukan_theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (e) {}
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("alrukan_theme", theme); } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      var lang = getLang();
      if (theme === "dark") {
        btn.innerHTML = (lang === "ur") ? "☀️ لائٹ موڈ" : "☀️ Light Mode";
      } else {
        btn.innerHTML = (lang === "ur") ? "🌙 ڈارک موڈ" : "🌙 Dark Mode";
      }
    }
  }

  function translateDOM(isUrdu) {
    if (!document.titleOrig) document.titleOrig = document.title;
    if (isUrdu && DICTIONARY[document.titleOrig]) {
      document.title = DICTIONARY[document.titleOrig];
    } else if (!isUrdu && document.titleOrig) {
      document.title = document.titleOrig;
    }

    var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span, button, strong, em, b, i, td, th, label, .eyebrow-plain, .rule, .lede, .badge");

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];

      // CRITICAL FOR LINKS:
      // Never set textContent on elements that contain child element tags (e.g. <li><a...>, <p><a...>)
      // Overwriting a container destroys the inner <a> links completely!
      if (el.children.length > 0) {
        // If container specifically has data-ur with formatted HTML (and preserves/provides links)
        var dUr = el.getAttribute("data-ur");
        var dEn = el.getAttribute("data-en");
        if (dUr && dEn && (dUr.indexOf("<") !== -1 || el.tagName === "P")) {
          var hasLink = el.querySelector("a");
          var urHasLink = dUr.indexOf("<a") !== -1;
          if (!hasLink || urHasLink) {
            el.innerHTML = isUrdu ? dUr : dEn;
          }
        }
        continue;
      }

      // Check data-ur and data-en on leaf element
      var dataUr = el.getAttribute("data-ur");
      var dataEn = el.getAttribute("data-en");
      if (dataUr && dataEn) {
        el.textContent = isUrdu ? dataUr : dataEn;
        continue;
      }

      var text = el.textContent.trim().replace(/\s+/g, " ");
      if (!text) continue;

      if (!el.hasAttribute("data-orig-text")) {
        el.setAttribute("data-orig-text", text);
      }

      var orig = el.getAttribute("data-orig-text");
      if (isUrdu) {
        if (DICTIONARY[orig]) {
          el.textContent = DICTIONARY[orig];
        }
      } else {
        el.textContent = orig;
      }
    }
  }

  function applyLanguage(lang) {
    var isUrdu = (lang === "ur");
    document.documentElement.setAttribute("lang", lang);
    if (isUrdu) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }

    try { localStorage.setItem("alrukan_lang", lang); } catch (e) {}

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = isUrdu ? "🌐 English" : "🌐 اردو";
    }

    // Update theme button text
    var theme = document.documentElement.getAttribute("data-theme") || "dark";
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      if (theme === "dark") {
        themeBtn.innerHTML = isUrdu ? "☀️ لائٹ موڈ" : "☀️ Light Mode";
      } else {
        themeBtn.innerHTML = isUrdu ? "🌙 ڈارک موڈ" : "🌙 Dark Mode";
      }
    }

    translateDOM(isUrdu);

    // Refresh cost calculator if present on page
    if (typeof window.calcCost === "function") {
      try { window.calcCost(); } catch (e) {}
    }
  }

  function setupNavigation() {
    var menuToggle = document.getElementById("menu-toggle");
    var mainNav = document.getElementById("main-nav");
    if (!menuToggle || !mainNav) return;
    if (menuToggle.dataset.navBound === "true") return;
    menuToggle.dataset.navBound = "true";

    function closeNav() {
      if (mainNav.classList.contains("open")) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    }

    menuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    document.addEventListener("click", function(e) {
      if (mainNav.classList.contains("open") && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeNav();
      }
    });

    var navLinks = mainNav.querySelectorAll("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", closeNav);
    }

    var lastScrollY = window.scrollY || window.pageYOffset;
    window.addEventListener("scroll", function() {
      var currentY = window.scrollY || window.pageYOffset;
      if (Math.abs(currentY - lastScrollY) > 15 && mainNav.classList.contains("open")) {
        closeNav();
      }
      lastScrollY = currentY;
    }, { passive: true });
  }

  function setupButtons() {
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn && themeBtn.dataset.bound !== "true") {
      themeBtn.dataset.bound = "true";
      themeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var current = document.documentElement.getAttribute("data-theme") || "dark";
        var nextTheme = (current === "dark") ? "light" : "dark";
        applyTheme(nextTheme);
      });
    }

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn && langBtn.dataset.bound !== "true") {
      langBtn.dataset.bound = "true";
      langBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var current = getLang();
        var nextLang = (current === "ur") ? "en" : "ur";
        applyLanguage(nextLang);
      });
    }
  }

  function init() {
    var yEl = document.getElementById("y");
    if (yEl) { yEl.textContent = new Date().getFullYear(); }
    var theme = getTheme();
    var lang = getLang();
    applyTheme(theme);
    setupNavigation();
    setupButtons();
    applyLanguage(lang);
  }

  // Immediate attribute setup before rendering
  document.documentElement.setAttribute("data-theme", getTheme());
  var initialLang = getLang();
  document.documentElement.setAttribute("lang", initialLang);
  if (initialLang === "ur") {
    document.documentElement.setAttribute("dir", "rtl");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

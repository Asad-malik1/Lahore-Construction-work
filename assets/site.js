// Al-Rukan Builders - Universal Site Script with Full-Page Bilingual Translation Engine
(function() {
  // Load Google Translate script dynamically if not present
  if (!document.getElementById("google-translate-script")) {
    var gtScript = document.createElement("script");
    gtScript.id = "google-translate-script";
    gtScript.type = "text/javascript";
    gtScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    gtScript.async = true;
    document.head.appendChild(gtScript);
  }

  // Create hidden Google Translate container
  if (!document.getElementById("google_translate_element")) {
    var gtDiv = document.createElement("div");
    gtDiv.id = "google_translate_element";
    gtDiv.style.display = "none";
    document.body ? document.body.appendChild(gtDiv) : document.addEventListener("DOMContentLoaded", function() {
      document.body.appendChild(gtDiv);
    });
  }

  // Define Google Translate initialization
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'ur,en',
      autoDisplay: false
    }, 'google_translate_element');

    // If initial preference is Urdu, trigger it once ready
    var current = getLang();
    if (current === 'ur') {
      setTimeout(function() { triggerGoogleTranslate('ur'); }, 500);
    }
  };

  function triggerGoogleTranslate(lang) {
    // Set cookies for Google Translate across root path
    document.cookie = "googtrans=/en/" + lang + "; path=/;";
    document.cookie = "googtrans=/en/" + lang + "; path=/; domain=" + window.location.hostname + ";";
    
    // Select the combo box inside Google Translate if already loaded
    var select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  }


  var DICTIONARY = {
  "Home": "صفحۂ اول",
  "About Us": "ہمارے بارے میں",
  "Services": "خدمات",
  "Our Work": "ہمارا کام",
  "Contact": "رابطہ کریں",
  "WhatsApp Us": "واٹس ایپ رابطہ",
  "Call Owner": "مالک سے بات کریں",
  "Call for a Site Visit": "سائٹ وزٹ کیلئے کال کریں",
  "Call for a Quote": "کوٹیشن کیلئے کال کریں",
  "Book an Inspection": "معائنے کا وقت بک کریں",
  "Discuss Your Project": "اپنے پروجیکٹ پر بات کریں",
  "See Completed Houses": "مکمل شدہ مکانات دیکھیں",
  "View Our Work": "ہمارا کام دیکھیں",
  "Back to Home": "صفحۂ اول پر جائیں",
  "WhatsApp Support": "واٹس ایپ سپورٹ",
  "Dark Mode": "ڈارک موڈ",
  "Light Mode": "لائٹ موڈ",
  "Dark": "ڈارک موڈ",
  "Light": "لائٹ موڈ",
  "English": "English",
  "اردو": "اردو",
  "📍 Lahore": "📍 لاہور",
  "AL-RUKAN BUILDERS": "الرکن بلڈرز",
  "SERVING LAHORE SINCE 1984 • 40+ YEARS": "لاہور میں خدمت کے 40+ سال • 1984 سے قائم",
  "Related services": "متعلقہ خدمات",
  "Have a plot in Lahore and want to start building?": "لاہور میں پلاٹ ہے اور تعمیر شروع کرنا چاہتے ہیں؟",
  "Let's discuss your plan, budget and timeline honestly, before anything is signed.": "آئیں کسی بھی معاہدے سے پہلے آپ کے پلان، بجٹ اور شیڈول پر ایمانداری سے بات کریں۔",
  "Building or renovating a shop in Lahore?": "لاہور میں دکان بنانا یا تزئین و آرائش چاہتے ہیں؟",
  "Tell us your business type and timeline — we'll plan around it.": "اپنے کاروبار کی قسم اور مطلوبہ وقت بتائیں — ہم اسی مطابق منصوبہ بنائیں گے۔",
  "Planning house construction in Lahore?": "لاہور میں مکان کی تعمیر کا ارادہ ہے؟",
  "Ready to build a house in Lahore?": "لاہور میں گھر بنانے کے لیے تیار ہیں؟",
  "Renovating a home in Lahore?": "لاہور میں گھر کی رینوویشن چاہتے ہیں؟",
  "Planning marble work in Lahore?": "لاہور میں ماربل کے کام کا منصوبہ ہے؟",
  "Planning tile work in Lahore?": "لاہور میں ٹائل کے کام کی منصوبہ بندی کر رہے ہیں؟",
  "Need construction workers in Lahore?": "لاہور میں تعمیراتی کاریگروں کی ضرورت ہے؟",
  "Talk to the builder directly": "براہ راست بلڈر سے رابطہ کریں",
  "HOME BUILDERS IN LAHORE": "لاہور میں ہوم بلڈرز",
  "Building your house as if it were ours.": "آپ کے گھر کی تعمیر بالکل اپنے گھر کی طرح۔",
  "Home Builders is our full house-construction service — from the first site marking to the day you get the keys — handled by the same family and team throughout, so there's one point of contact and one point of responsibility.": "ہوم بلڈرز ہماری مکمل مکان تعمیراتی سروس ہے — زمین کی پہلی نشاندہی سے لے کر چابی کی سپردگی تک — ایک ہی مستند ٹیم ہر مرحلے کی براہ راست ذمہ دار ہوتی ہے۔",
  "What \"full house construction\" means with us": "ہمارے ساتھ \"مکمل مکان کی تعمیر\" کا کیا مطلب ہے",
  "Many clients come to us with just a plot and a rough idea. As home builders, we help carry that plot through:": "اکثر کسٹمرز محض ایک خالی پلاٹ اور ابتدائی خیال کے ساتھ آتے ہیں۔ بطور ہوم بلڈرز ہم اس پلاٹ کو ایک شاندار گھر میں تبدیل کرتے ہیں:",
  "Site layout, foundation and gray structure (see our gray structure page)": "سائٹ لے آؤٹ، مضبوط بنیادیں اور معیاری گرے اسٹرکچر (گرے اسٹرکچر کی تفصیلات دیکھیں)",
  "Electrical and plumbing chasing and rough-in": "بجلی کی پائپنگ اور پلمبنگ کا پائیدار انڈر گراؤنڈ کام",
  "Plaster, damp-proofing and internal/external finishing": "سیمنٹ پلستر، ڈیمپ پروفنگ (سیلاب/نمی سے بچاؤ) اور اندرونی و بیرونی فنشنگ",
  "Flooring — tiles or marble, based on the client's choice": "فرش بندی — کسٹمر کے انتخاب کے مطابق ٹائلز یا ماربل کی معیاری فٹنگ",
  "Doors, woodwork coordination and paint": "دروازے، ووڈ ورک (لکڑی کا کام) اور پریمیم پینٹ فنشنگ",
  "Final snag list and handover": "حتمی کوالٹی چیک اور چابی کی باضابطہ سپردگی",
  "We coordinate this with our own labour and our engineer and supervisor, rather than passing you between different unrelated contractors for each trade.": "ہم یہ سارا کام اپنی ٹیم، مستند انجینئر اور سپروائزر کی زیرِ نگرانی مکمل کرتے ہیں، تاکہ آپ کو الگ الگ ٹھیکیداروں کے پیچھے نہ بھاگنا پڑے۔",
  "Who this service is for": "یہ سروس کن حضرات کے لیے ہے",
  "This is for a client who wants one company to be answerable for the whole house — not just the walls, or just the tiling. It suits both a family building their own home to live in, and an investor building to sell or rent.": "یہ ان کسٹمرز کے لیے بہترین ہے جو پورے گھر کی تعمیر کے لیے ایک ہی ذمہ دار کمپنی چاہتے ہیں۔ یہ رہائش کے لیے گھر بنانے والی فیملیز اور فروخت یا کرایہ کے لیے بنانے والے انویسٹرز دونوں کے لیے یکساں موزوں ہے۔",
  "What we ask from the client": "کسٹمر سے ہماری ضرورت",
  "To build well, we need clear decisions on layout, budget for finishing (tiles/marble grade, fittings) and a realistic payment schedule tied to work stages. We would rather have this conversation honestly up front than promise a number we know we can't hold to later.": "بہترین تعمیر کے لیے، ہمیں لے آؤٹ پر واضح فیصلوں، فنشنگ بجٹ اور کام کے مراحل سے منسلک شفاف پیمنٹ شیڈول کی ضرورت ہوتی ہے۔ ہم پہلے دن سے ہی صاف اور حقیقت پسندانہ بات کو ترجیح دیتے ہیں۔",
  "SHOP CONSTRUCTION BUILDERS IN LAHORE": "لاہور میں شاپ اور کمرشل تعمیرات",
  "Shops and small commercial spaces, built around your business, not a generic layout.": "دکانیں اور کمرشل جگہیں، آپ کے کاروبار کی ضروریات کے عین مطابق۔",
  "A shop or small commercial building has different priorities from a home — visible frontage, efficient floor space, wiring for signage and equipment, and often a tighter timeline because every closed day is lost business.": "دکان یا کمرشل عمارت کے تقاضے رہائشی گھر سے بالکل مختلف ہوتے ہیں — نمایاں فرنٹ، کارآمد جگہ، سائن بورڈ اور آلات کے لیے وائرنگ، اور سخت ڈیڈ لائن کیونکہ ہر بند دن کاروبار کا نقصان ہوتا ہے۔",
  "What we build and renovate": "ہم کیا تعمیر اور رینوویٹ کرتے ہیں",
  "Shop shells — structure, frontage and internal walls for a new shop": "شاپ شیلز — نئی دکان کے لیے بنیادی اسٹرکچر، فرنٹ ایلیویشن اور اندرونی دیواریں",
  "Showroom fit-outs, including flooring (tiles/marble) and finishing": "شوروم فٹ آؤٹس، بشمول پریمیم فرش (ٹائلز/ماربل) اور خوبصورت فنشنگ",
  "Small office and commercial building construction": "چھوٹے دفاتر اور کمرشل عمارتوں کی مکمل تعمیر",
  "Renovation of existing shops — new front, flooring, electrical upgrade": "موجودہ دکانوں کی رینوویشن — جدید فرنٹ، نیا فرش، اور الیکٹریکل اپ گریڈ",
  "Boundary and structural work for plazas and small commercial plots": "پلازوں اور کمرشل پلاٹس کی باؤنڈری وال اور بنیادی اسٹرکچرل کام",
  "Working around a running business": "چلتے ہوئے کاروبار کے دوران کام",
  "For renovation of an already-operating shop, we plan work to minimise closed days — sequencing noisy or messy work first, and finishing/detailing work later, and discussing working hours with the shopkeeper so deliveries, customers and construction don't clash more than necessary.": "پہلے سے چلتی ہوئی دکان کی تزئین و آرائش کے لیے، ہم دکان کے بند ہونے کے دنوں کو کم سے کم رکھتے ہیں اور کام کے اوقات دکاندار کی سہولت سے طے کرتے ہیں۔",
  "Budget-focused construction": "بجٹ کے مطابق تعمیر",
  "Commercial clients are usually working to a firmer budget and payback timeline than a homeowner. We are direct about where money is best spent (structure, wiring capacity, flooring durability for foot traffic) versus where a shopkeeper can reasonably save (decorative finishing that can be upgraded later).": "کمرشل کلائنٹس عموماً محدود بجٹ پر کام کرتے ہیں۔ ہم واضح مشورہ دیتے ہیں کہ کن چیزوں پر پیسہ لگانا ضروری ہے (مضبوط اسٹرکچر، ہیوی وائرنگ، پائیدار فرش) اور کہاں بچت کی جا سکتی ہے۔",
  "Compliance": "قانونی ضوابط اور منظوری",
  "Any approvals, permissions or regulatory requirements for commercial construction in your specific area of Lahore are the client's responsibility to confirm with the relevant authority; we build to the agreed plan and specification set out in the written contract.": "متعلقہ اداروں سے کمرشل تعمیراتی این او سی اور منظوری کلائنٹ کی ذمہ داری ہوتی ہے، جبکہ ہم تحریری معاہدے کے مطابق منظور شدہ نقشے پر کام کرتے ہیں۔",
  "HOUSE-READY CONTRACTOR IN LAHORE": "لاہور میں ریڈی ہاؤس کنٹریکٹر",
  "A contractor who hands over a house you can actually move into.": "ایسا کنٹریکٹر جو آپ کو ایسا گھر بنا کر دے جس میں آپ فوراً شفٹ ہو سکیں۔",
  "House-ready\" means we take responsibility for the full sequence of trades — structure, plumbing/electrical, finishing, flooring — so what you get at the end is a livable house, not a shell with a list of leftover jobs.": "\"ریڈی ہاؤس\" کا مطلب ہے کہ ہم تعمیر کے ہر شعبے کی مکمل ذمہ داری لیتے ہیں — اسٹرکچر، پلمبنگ، بجلی، فنشنگ، فرش — تاکہ آپ کو ادھورا کام نہیں بلکہ مکمل تیار گھر ملے۔",
  "What \"house-ready\" covers": "ریڈی ہاؤس سروس میں کیا شامل ہے",
  "Sequencing structure, electrical/plumbing rough-in and finishing in the right order": "اسٹرکچر، الیکٹریکل، پلمبنگ اور فنشنگ کو درست ترتیب میں سرانجام دینا",
  "Coordinating our own tile and marble fitters so flooring lines up with the finishing schedule": "ٹائل اور ماربل کے کاریگروں کے شیڈول کی باقاعدہ منصوبہ بندی",
  "A final walkthrough and snag list before handover, so small defects are fixed before you move in": "سپردگی سے قبل حتمی انسپیکشن تاکہ شفٹ ہونے سے پہلے تمام چھوٹی بڑی خامیاں دور ہو سکیں",
  "One written contract covering the agreed scope, rather than separate verbal deals per trade": "ایک باضابطہ تحریری معاہدہ جس میں تمام کاموں کی تفصیل واضح ہو",
  "Why sequencing matters": "درست ترتیب کی اہمیت کیوں ہے",
  "A lot of delay and rework on Lahore construction sites comes from trades happening in the wrong order — for example, finishing paint before electrical conduit work is fully closed up, or tiling before plumbing pressure-testing. Because our engineer and supervisor oversee the whole job rather than just one trade, we plan this sequence deliberately": "لاہور میں تعمیراتی تاخیر اور نقصانات اکثر غلط ترتیب کی وجہ سے ہوتے ہیں — جیسے پائپ ٹیسٹنگ سے پہلے ٹائل لگانا۔ ہمارے انجینئر کی زیرِ نگرانی تمام مراحل درست ترتیب سے ہوتے ہیں۔",
  "What we won't promise": "ہم کیا جھوٹے وعدے نہیں کرتے",
  "We won't tell you a house will be \"ready in 30 days\" if the scope and site conditions don't support that — a false handover date helps no one once it's missed. Our written contract states a realistic completion window based on the actual scope agreed, and we update the client if conditions on site (weather, material delays, design changes) affect it": "ہم جلد بازی کے جھوٹے وعدے نہیں کرتے۔ اگر کام معیاری چاہیے تو حقیقت پسندانہ وقت دینا ضروری ہے، جس کی مکمل تفصیلات تحریری معاہدے میں درج ہوتی ہیں۔",
  "Handover": "چابی کی سپردگی",
  "Handover includes a joint walkthrough with the client, a documented snag list of anything to be corrected, and confirmation of what is covered under the workmanship period stated in the contract": "چابی کی سپردگی میں کلائنٹ کے ساتھ مشترکہ معائنہ، تسلی بخش کوالٹی چیک اور وارنٹی پیریڈ کی تصدیق شامل ہے۔",
  "MARBLE FITTING WORK IN LAHORE": "لاہور میں ماربل فٹنگ کا کام",
  "Marble that's matched, levelled and jointed the way it should be.": "ماربل کی درست لیولنگ، کٹنگ اور ہموار فٹنگ۔",
  "Marble is expensive to get wrong — mismatched veining, uneven joints and a floor that isn't level will show for as long as the marble is down. Our marble fitters take the extra time this material needs.": "ماربل کا غلط لگنا بڑا نقصان دہ ہوتا ہے — ناموزوں ریشے اور اونچے نیچے جوڑ ساری زندگی نظر آتے ہیں۔ ہمارے ماہر کاریگر ماربل کے نفیس کام پر خصوصی توجہ دیتے ہیں۔",
  "Marble work we handle": "ماربل کا کام جو ہم کرتے ہیں",
  "Marble flooring for living rooms, halls and bedrooms": "ڈرائنگ روم، ہال اور بیڈ رومز کے لیے خوبصورت ماربل فلورنگ",
  "Staircase marble fitting, including edges and nosing": "سیڑھیوں پر ماربل کی مکمل فٹنگ، بشمول گول نوزنگ اور ایجز",
  "Marble cladding for walls, counters and facades": "دیواروں، کچن کاؤنٹرز اور فرنٹ ایلیویشن کے لیے ماربل کلیڈنگ",
  "Replacing old, dull or damaged marble flooring": "پرانے، مدہم یا خراب ماربل فرش کو تبدیل کرنا",
  "Polishing and restoring existing marble floors": "موجودہ ماربل فرش کی گرائنڈنگ، کیمیکل پالش اور چمک بحال کرنا",
  "How we approach a marble job": "ہمارا طریقہ کار",
  "Before fitting, we check slab-to-slab veining and colour match, since marble from the same batch can still vary. We plan the layout so pattern and veining run consistently across a room rather than jumping randomly from piece to piece, level the base properly, and control joint width so the finished floor reads as one surface rather than a patchwork": "لگانے سے پہلے ہم سلیب کے ریشوں اور رنگ کا ملان کرتے ہیں تاکہ پورے کمرے کا ڈیزائن ایک جیسا اور خوبصورت نظر آئے، اور باریک جوڑوں کے ساتھ مکمل ہموار لیول ہو۔",
  "Choosing your marble": "ماربل کا انتخاب",
  "We can source marble through our regular suppliers or work with marble you've already selected or purchased yourself. If you ask us, we'll give an honest opinion on which grade suits the traffic and use of a particular room — for example, a harder-wearing option for a main hallway versus a decorative option for a low-traffic feature wall": "آپ اپنی پسند کا ماربل خود بھی لا سکتے ہیں یا ہمارے سپلائرز سے معیاری ریٹ پر حاصل کر سکتے ہیں۔ ہم آپ کو کمرے کے استعمال کے لحاظ سے بہترین ماربل کا مخلصانہ مشورہ دیتے ہیں۔",
  "Maintenance after fitting": "فٹنگ کے بعد دیکھ بھال",
  "We explain basic care after installation — cleaning products to avoid, and how long to wait before heavy furniture is placed — so the finish lasts as it should": "فٹنگ کے بعد ہم ضروری ہدایات دیتے ہیں کہ کون سے کیمیکل صفائی میں استعمال نہیں کرنے اور فرنیچر رکھنے سے پہلے کتنا انتظار کرنا ہے۔",
  "HOUSE RENOVATION IN LAHORE": "لاہور میں مکان کی تزئین و آرائش",
  "We'll tell you what's actually wrong with an old house — not just what's easy to fix.": "ہم آپ کو پرانے گھر کی اصل خرابی بتائیں گے — نہ کہ صرف سطحی عارضی حل۔",
  "Renovation work is where honesty matters most. Old Lahore homes often hide real structural issues behind fresh paint. We inspect properly before quoting, so you know if you're fixing a wall or fixing the reason the wall keeps cracking.": "رینوویشن میں سب سے اہم چیز ایمانداری ہے۔ لاہور کے پرانے گھروں میں اکثر پینٹ کے پیچھے گہری خرابیاں چھپی ہوتی ہیں۔ ہم تفصیلی معائنہ کر کے اصل وجہ بتاتے ہیں۔",
  "What renovation work we take on": "ہم کون سا رینوویشن ورک کرتے ہیں",
  "Structural repair of cracked or weakened walls, beams and columns": "دیواروں، بیمز اور پلرز کی دراڑوں اور کمزوری کی تکنیکی مرمت",
  "Damp-proofing and treatment of seepage and water damage": "سیم، نمی اور چھتوں کی لیکیج کا مستقل کیمیکل ٹریٹمنٹ",
  "Re-plastering and re-wiring/re-plumbing where required": "نیا پلستر، الیکٹریکل وائرنگ اور پائپ لائن کی مکمل تبدیلی",
  "Removing and replacing old flooring with new tiles or marble": "پرانے فرش کو اکھاڑ کر جدید ٹائلز یا ماربل کی نئی فٹنگ",
  "Adding a room, floor, or boundary wall extension to an existing house": "موجودہ مکان پر نئے کمرے، اضافی منزل یا باؤنڈری وال کی تعمیر",
  "Full \"gut renovation\" of an old house — down to structure, then rebuilt inside": "پرانے گھر کی مکمل اندرونی تعمیرِ نو (گٹ رینوویشن)",
  "How we inspect before quoting": "کوٹیشن سے پہلے ہمارا معائنہ",
  "Engineer Tajamal Malik checks the structure — cracks, dampness, foundation movement, roof and beam condition — before we give any estimate. If a wall looks cosmetic but is actually a symptom of a structural or drainage problem, we say so, even if it means a bigger scope and cost than the client expected. We would rather lose a job by being honest than win it and leave a client with the same problem in two years": "کوٹیشن سے پہلے ہمارے انجینئر تجمل ملک دیواروں، بنیادوں، چھت اور سیم کا باریک بینی سے جائزہ لیتے ہیں تاکہ مسئلہ ہمیشہ کے لیے حل ہو سکے۔",
  "Working in an occupied home": "رہائش کے دوران کام",
  "Many renovation jobs happen while a family is still living in the house. We plan work in stages — room by room or floor by floor where possible — and discuss dust, water and electricity cut-off timing with the family in advance rather than surprising them": "اگر فیملی گھر میں رہ رہی ہو تو ہم مرحلہ وار (کمرہ بہ کمرہ) کام کرتے ہیں اور پانی و بجلی کی سپلائی کے اوقات پہلے سے طے کرتے ہیں تاکہ فیملی کو پریشانی نہ ہو۔",
  "Old vs. new construction standards": "پرانی بمقابلہ جدید تعمیراتی تکنیک",
  "Older Lahore houses were often built to different standards (thinner walls, different foundation depth, older material). Where we tie new work into an old structure, our engineer accounts for this rather than assuming the old structure will simply support new load the same way a fresh structure would": "پرانے گھروں کی بنیادیں اور دیواریں موجودہ دور سے مختلف ہوتی ہیں۔ نئی منزل یا بوجھ ڈالتے وقت انجینئر مکمل چیک کرتا ہے کہ پرانا اسٹرکچر اس وزن کو سنبھالنے کے قابل ہے یا نہیں۔",
  "HOUSE CONSTRUCTION & GRAY STRUCTURE IN LAHORE": "لاہور میں گھر کی تعمیر اور گرے اسٹرکچر",
  "The part of a house you never see again — built to be checked once, right.": "گھر کا وہ بنیادی حصہ جو دوبارہ کبھی سامنے نہیں آتا — اسے پہلی بار ہی پرفیکٹ بننا چاہیے۔",
  "Foundation, columns, beams, slabs and brick walls are the gray structure stage of a house — the part that gets covered by plaster and paint. Because it can't easily be redone later, we have our engineer check it at every stage, not just at the end.": "بنیادیں، پلر، بیم، لینٹر اور اینٹوں کی چنائی گرے اسٹرکچر کہلاتے ہیں۔ چونکہ اس پر بعد میں پلستر آ جاتا ہے، اس لیے ہمارے انجینئر ہر مرحلے پر ذاتی طور پر سریا اور کنکریٹ مکس چیک کرتے ہیں۔",
  "What this service covers": "اس سروس میں کیا شامل ہے",
  "Site layout and marking according to the approved house plan": "منظور شدہ نقشے کے مطابق پلاٹ کی درست نشاندہی اور لے آؤٹ",
  "Excavation and foundation work": "مٹی کی کھدائی، روڑی، پی سی سی اور مضبوط بنیادوں کا کام",
  "Columns, beams and RCC slab casting": "آر سی سی پلرز، بیمز اور چھت کے لینٹر کی مضبوط بھرائی",
  "Brickwork for external and internal walls": "اول درجے کی اینٹوں کی معیاری چنائی (اندرونی و بیرونی)",
  "Damp-proofing and structural waterproofing at foundation level": "ڈی پی سی (DPC) اور بنیادوں کی جدید واٹر پروفنگ",
  "Staircase construction": "آر سی سی سیڑھیوں کی درست پیمائش کے ساتھ مضبوط تعمیر",
  "We can build the gray structure alone if you have your own finishing team, or continue through plaster, electrical/plumbing chasing, flooring and paint as a complete house construction project. Either way, engineer Tajamal Malik reviews steel, concrete mix and curing at each stage — this is not left only to the mason": "ہم صرف گرے اسٹرکچر بھی بناتے ہیں اور مکمل فنشنگ بھی۔ انجینئر تجمل ملک سریے کا جال، سیمنٹ ریشو اور پانی کی ترائی کا باقاعدہ خود معائنہ کرتے ہیں۔",
  "Material & quality approach": "مٹیریل اور کوالٹی پالیسی",
  "We use the cement, steel and brick grades agreed in the contract with the client — we do not substitute cheaper material without telling you. If a client wants to use a specific brand or supplier, we work with that; if not, we recommend material based on what has performed well on our past sites in Lahore's climate and soil conditions": "ہم معاہدے میں طے شدہ برانڈ کا سیمنٹ، گریڈ 60 اسٹیل اور اول اینٹ ہی استعمال کرتے ہیں۔ کسی قسم کا ناقص مٹیریل استعمال نہیں کیا جاتا۔",
  "Timeline": "تعمیراتی دورانیہ",
  "Gray structure timelines depend on the size of the house, number of floors, and weather (monsoon season slows curing and casting). We give a realistic schedule in the written contract rather than an attractive number just to win the job — and we tell you as early as possible if something is likely to run over": "گرے اسٹرکچر کا دورانیہ مکان کے سائز، منزلوں اور موسم پر منحصر ہوتا ہے۔ ہم ہمیشہ تحریری معاہدے میں حقیقی وقت کا تعین کرتے ہیں۔",
  "CONSTRUCTION WORKERS IN LAHORE": "لاہور میں ماہر تعمیراتی کاریگر اور لیبر",
  "Skilled masons, tile fitters and construction workers for your project.": "آپ کے پروجیکٹ کے لیے تجربہ کار راج مستری، ٹائل فٹرز اور محنتی لیبر۔",
  "Need reliable, experienced construction workers in Lahore? Al-Rukan Builders provides skilled masons, tile and marble installers, plasterers, and general construction labor under daily, weekly, or project-based contracts.": "کیا آپ کو لاہور میں تجربہ کار اور قابل اعتماد کاریگروں کی ضرورت ہے؟ الرکن بلڈرز ماہر مستری، ٹائل و ماربل فٹرز، پلستر والے اور لیبر ٹیم فراہم کرتا ہے۔",
  "Workers we supply": "ہماری فراہم کردہ افرادی قوت",
  "Master Masons (Raj Mistri) for brickwork, blockwork and plaster": "ماہر راج مستری برائے اینٹوں کی چنائی، بلاک ورک اور پلستر",
  "Tile & Marble Installers with precision cutting and leveling equipment": "جدید کٹنگ اور لیول مشینوں سے لیس ٹائل اور ماربل فٹرز",
  "Steel fixers and shuttering carpenters for concrete slabs": "چھت کے لینٹر کے لیے ماہر شٹرنگ کارپینٹرز اور سریا باندھنے والی ٹیم",
  "Plumbers and electricians for rough-in and finishing installations": "پلمبنگ اور الیکٹریکل کے تجربہ کار ٹیکنیشنز",
  "General construction labor for excavation, loading, and site cleaning": "کھدائی، سامان کی منتقلی اور سائٹ کی صفائی کے لیے محنتی مزدور",
  "Why hire through Al-Rukan Builders": "الرکن بلڈرز سے کاریگر حاصل کرنے کا فائدہ",
  "Direct supervision by experienced supervisors to maintain quality": "کوالٹی برقرار رکھنے کے لیے سینیئر سپروائزر کی براہ راست نگرانی",
  "Punctual, honest and vetted workforce with proven track records": "وقت کے پابند، ایماندار اور سالہا سال سے ہمارے ساتھ منسلک کاریگر",
  "Flexible contracting — daily wages, square-foot rate, or lump-sum contract": "آسان شرائط — دیہاڑی، اسکوائر فٹ ریٹ یا مکمل ٹھیکہ",
  "Replacement guarantee if a worker's performance is not satisfactory": "اگر کسی ورکر کا کام تسلی بخش نہ ہو تو فوری متبادل فراہم کیا جاتا ہے",
  "TILES WORK IN LAHORE": "لاہور میں ٹائلز ورک",
  "Floor, bathroom, kitchen and wall tiling that's straight, solid and clean.": "فرش، باتھ روم، کچن اور وال ٹائلز کی سیدھی، مضبوط اور صاف ستھری فٹنگ۔",
  "Tiling looks simple until it's finished badly — hollow tiles that crack when something heavy drops, grout lines that wave across the room, and slopes in wet areas that leave water pooling in corners. We do tiling properly from the substrate up.": "ٹائلز کا کام آسان لگتا ہے مگر ذرا سی لاپرواہی سے ٹائلز کھوکھلی رہ جاتی ہیں، جوڑ ٹیڑھے ہو جاتے ہیں اور باتھ روم میں پانی کھڑا رہتا ہے۔ ہم بیس تیار کرنے سے لے کر فائنل گرافٹنگ تک مکمل معیار سے کام کرتے ہیں۔",
  "Tiles services we provide": "ٹائلز کی خدمات جو ہم پیش کرتے ہیں",
  "Full house floor tiling (porcelain, ceramic, granite tiles)": "پورے گھر کے فرش کی ٹائلنگ (پورسلین، سیرامک، گرینائٹ ٹائلز)",
  "Bathroom tile installation with proper waterproofing and drainage slope": "باتھ رومز کی ٹائلنگ مع واٹر پروفنگ اور پانی کے درست ڈھلوان",
  "Kitchen wall and backsplash tiling": "کچن کی دیواروں اور کاؤنٹر بیک سپلیش کی خوبصورت ٹائلنگ",
  "Exterior wall and front elevation tile fixing": "بیرونی دیواروں اور فرنٹ ایلیویشن پر ٹائلز کی مضبوط فٹنگ",
  "Repair and replacement of loose, broken, or hollow tiles": "ڈھیلی، ٹوٹی ہوئی یا کھوکھلی ٹائلز کی مرمت اور تبدیلی",
  "Our standard for tile installation": "ٹائل فٹنگ کا ہمارا معیار",
  "Level substrate before placing any tile": "ٹائل لگانے سے پہلے بیس کو مکمل ہموار اور لیول کرنا",
  "Full mortar or adhesive coverage — no hollow corners": "سیمنٹ بانڈ کی مکمل کوریج تاکہ کوئی کونا کھوکھلا نہ رہے",
  "Laser or string-line alignment for razor-straight grout joints": "لیزر اور ڈوری کے ذریعے جوڑوں کی بالکل سیدھی الائنمنٹ",
  "Proper slope in bathrooms and terraces to prevent stagnant water": "باتھ روم اور چھت پر مناسب ڈھلوان تاکہ پانی بالکل نہ رکے",
  "Clean grouting with matching color epoxy or polymer grout": "ہم رنگ یا میچنگ ایپوکسی گروٹ کے ساتھ صاف ستھری فنشنگ",
  "A Lahore construction family, four decades in.": "لاہور کا مستند تعمیراتی ادارہ، چار دہائیوں سے زیادہ کا تجربہ۔",
  "Al-Rukan Builders did not start as a website or a brand — it started as a working relationship between a builder and the families of Lahore who trusted him with their homes.": "الرکن بلڈرز کا آغاز کسی ویب سائٹ یا اشتہار سے نہیں ہوا — بلکہ لاہور کی ان فیملیز کے اعتماد سے ہوا جنہوں نے اپنے گھروں کی تعمیر ہمارے سپرد کی۔",
  "How it started": "ہماری شروعات اور تاریخ",
  "Our work in construction goes back more than 40 years to Experienced Master Builders (Est. 1984), who built and repaired homes across Lahore at a time when there was no website, no advertising — only word of mouth from one satisfied family to the next. That reputation, built house by house, is what this company still stands on.": "ہمارا تعمیراتی تجربہ 40 سال سے زائد پر محیط ہے، جب 1984 میں تجربہ کار معماروں نے لاہور بھر میں گھر تعمیر کیے۔ اُس وقت کوئی انٹرنیٹ نہیں تھا، صرف ایک مطمئن خاندان کی دوسرے خاندان کو دی گئی سفارش تھی۔ یہی نیک نامی آج بھی ہمارے کاروبار کی بنیاد ہے۔",
  "How it continues today": "آج ہمارا طریقہ کار",
  "Today the same family runs the business. Muhammad Mushtaq is the owner and takes overall responsibility for every contract we sign. Asad Ali manages client communication, contracts, and day-to-day operations. Engineer Tajamal Malik handles structural review, site inspections and drawings. Muzamal Malik supervises on-site teams and advises on material and finishing.": "آج بھی وہی فیملی اس ادارے کو چلا رہی ہے۔ محمد مشتاق صاحب بطور اونر ہر معاہدے کی حتمی ذمہ داری لیتے ہیں۔ اسد علی کسٹمر ریلیشنز اور آپریشنز سنبھالتے ہیں۔ انجینئر تجمل ملک اسٹرکچرل ڈیزائن اور سائٹ کا معائنہ کرتے ہیں، جبکہ مزمل ملک فیلڈ سپروائزر ہیں۔",
  "What we believe": "ہمارے بنیادی اصول",
  "A house is the biggest single purchase most families in Lahore will ever make. It is not the place for shortcuts, misleading estimates or cut-corner materials. We give honest prices, use agreed materials, and put our own names and reputations behind the finished work.": "زیادہ تر فیملیز کے لیے گھر زندگی کی سب سے بڑی اور اہم سرمایہ کاری ہوتی ہے۔ یہ وہ جگہ نہیں جہاں ناقص مٹیریل یا جھوٹے وعدوں سے کام لیا جائے۔ ہم ہمیشہ جائز ریٹس دیتے ہیں اور طے شدہ مٹیریل ہی استعمال کرتے ہیں۔",
  "Talk to the people doing the work.": "براہ راست کام کرنے والی ٹیم سے رابطہ کریں۔",
  "No call centre, no sales agent — you speak directly with the owner, manager or engineer handling projects in Lahore.": "کوئی کال سینٹر یا نمائندہ نہیں — آپ کی براہ راست بات ہمارے اونر، مینیجر یا سائٹ انجینئر سے ہوتی ہے۔",
  "Our team's direct numbers": "ہماری ٹیم کے براہ راست رابطہ نمبرز",
  "Owner": "اونر / مالک",
  "Manager": "مینیجر",
  "Engineer": "انجینئر",
  "Supervisor & Advisor": "سپروائزر اور ایڈوائزر",
  "Coordinated via office": "دفتر کے ذریعے رابطہ",
  "Office Address": "دفتر کا پتہ",
  "Main Canal Road / Allama Iqbal Town, Lahore, Punjab, Pakistan": "مین کینال روڈ / علامہ اقبال ٹاؤن، لاہور، پنجاب، پاکستان",
  "Send an Email": "ای میل بھیجیں",
  "WhatsApp Us Directly": "براہ راست واٹس ایپ کریں",
  "Page Not Found": "معذرت! یہ صفحہ دستیاب نہیں ہے",
  "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.": "آپ کا مطلوبہ صفحہ تبدیل ہو چکا ہے یا موجود نہیں ہے۔ آپ صفحۂ اول پر جا سکتے ہیں یا ہم سے براہ راست رابطہ کر سکتے ہیں۔",
  "House Builders Lahore": "ہاؤس بلڈرز لاہور",
  "Al-Rukan Builders — Serving Lahore since 1984 with 40+ years of quality construction experience.": "الرکن بلڈرز — 40 سال سے زائد معیاری تعمیراتی تجربے کے ساتھ لاہور بھر میں خدمات۔",
  "Home Builders": "ہوم بلڈرز",
  "House Construction": "ہاؤس کنسٹرکشن",
  "House Renovation": "ہاؤس رینوویشن",
  "Tiles Work": "ٹائلز ورک",
  "Marble Fitting": "ماربل فٹنگ",
  "Construction Workers": "تعمیراتی کاریگر",
  "House-Ready Contractor": "ریڈی ہاؤس کنٹریکٹر",
  "Shop Construction": "شاپ کنسٹرکشن",
  "Company": "کمپنی",
  "Privacy & Disclaimer": "پرائیویسی اور ڈس کلیمر",
  "All rights reserved.": "جملہ حقوق محفوظ ہیں۔",
  "Business information site only — see Privacy & Disclaimer.": "صرف کاروباری معلومات کی ویب سائٹ — پرائیویسی اور ڈس کلیمر دیکھیں۔",
  "Lahore, Punjab, Pakistan": "لاہور، پنجاب، پاکستان"
};

  function getTheme() {
    return localStorage.getItem("alrukan_theme") || localStorage.getItem("theme") || "dark";
  }

  function getLang() {
    return localStorage.getItem("alrukan_lang") || localStorage.getItem("lang") || "en";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("alrukan_theme", theme);
    localStorage.setItem("theme", theme);
    updateThemeUI(theme);
  }

  function updateThemeUI(theme) {
    var themeBtn = document.getElementById("theme-toggle");
    if (!themeBtn) return;
    var icon = themeBtn.querySelector(".icon");
    var lbl = themeBtn.querySelector(".lbl");
    var isUrdu = (getLang() === "ur");

    if (theme === "dark") {
      if (icon) icon.textContent = "🌙";
      if (lbl) lbl.textContent = isUrdu ? "ڈارک موڈ" : "Dark Mode";
    } else {
      if (icon) icon.textContent = "☀️";
      if (lbl) lbl.textContent = isUrdu ? "لائٹ موڈ" : "Light Mode";
    }
  }

  // Recursive text node translator
  function translateDOM(isUrdu) {
    var targets = document.querySelectorAll("h1, h2, h3, h4, h5, p, li, a, span, button, .eyebrow-plain, .rule, .lede");
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      // Skip if contains deep child blocks
      if (el.querySelector("p, ul, ol, div, section, article")) continue;

      // Check data-en / data-ur first
      var dataUr = el.getAttribute("data-ur");
      var dataEn = el.getAttribute("data-en");
      if (dataUr && dataEn) {
        el.textContent = isUrdu ? dataUr : dataEn;
        continue;
      }

      // Check text in dictionary
      var text = el.textContent.trim().replace(/\s+/g, " ");
      if (!text) continue;

      // Save original English
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
      if (document.body) document.body.classList.add("lang-urdu");
    } else {
      document.documentElement.removeAttribute("dir");
      if (document.body) document.body.classList.remove("lang-urdu");
    }

    localStorage.setItem("alrukan_lang", lang);
    localStorage.setItem("lang", lang);

    var langLbl = document.getElementById("lang-lbl");
    if (langLbl) {
      langLbl.textContent = isUrdu ? "English" : "اردو";
    }

    // Translate entire document text via client dictionary
    translateDOM(isUrdu);

    // Trigger full-page Google Translate engine
    triggerGoogleTranslate(isUrdu ? 'ur' : 'en');


    // Update theme toggle label
    var currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateThemeUI(currentTheme);

    // If cost calculator is present on home page, re-run it
    if (typeof window.calculateCost === "function") {
      window.calculateCost();
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
      if (Math.abs(currentY - lastScrollY) > 10 && mainNav.classList.contains("open")) {
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
    var yEl = document.getElementById('y'); if (yEl) { yEl.textContent = new Date().getFullYear(); }
    var theme = getTheme();
    var lang = getLang();
    applyTheme(theme);
    setupNavigation();
    setupButtons();
    applyLanguage(lang);
  }

  // Set initial HTML tag attributes before rendering
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

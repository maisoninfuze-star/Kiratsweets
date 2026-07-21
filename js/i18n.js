/* ===== Kirat — FR/EN dictionary + toggle ===== */
const I18N = {
  fr: {
    topRating:"sur Google · 76 avis", topLoc:"Chomedey, Laval", topHours:"Ouvert tous les jours · 10 h – 20 h 30",
    navStory:"Notre maison", navMenu:"Menu", navCatering:"Traiteur", navVisit:"Nous trouver", navCall:"Appeler",
    heroKicker:"Sucreries &amp; collations indiennes · depuis Laval",
    heroTitle:"Délices indiens<br><em>authentiques.</em>",
    heroLede:"Mithai fraîches, samoussas croustillants et coffrets de fête — préparés maison chaque jour à Chomedey.",
    heroBtnMenu:"Voir le menu", heroBtnCater:"Service traiteur",
    trust1:"Google · 76 avis", trust2N:"100 % veg", trust2:"options véganes", trust3N:"Frais", trust3:"fait maison chaque jour",
    storyBadge:"Sucreries &amp; Collations", storyKicker:"Notre maison",
    storyTitle:"Le goût de la maison, fait à la main chaque matin.",
    storyP1:"Chez Kirat, chaque mithai est préparé en petites quantités avec du lait frais, des noix et une touche de safran — comme à la maison. Nos vitrines regorgent de sucreries colorées et de collations salées croustillantes, dans un espace impeccable dont nos clients raffolent.",
    storyP2:"Des classiques du Pendjab aux favoris du Bengale, nous célébrons la richesse des desserts indiens — pour un thé de l'après-midi, un cadeau, ou une grande fête.",
    storyQuote:"« Je n'ai jamais vu un endroit aussi propre. Les sucreries sont incroyablement fraîches et savoureuses — qualité au sommet. »",
    storyCite:"— Manpreet K., avis Google ★★★★★",
    stat1:"variétés de mithai", stat2:"jours ouverts", stat3:"&amp; options véganes",
    menuKicker:"Notre menu", menuTitle:"Sucreries, collations &amp; coffrets",
    menuNote:"Prix indicatifs — appelez-nous pour la sélection du jour et les commandes en gros.",
    tabSweets:"Sucreries (Mithai)", tabSnacks:"Collations salées", tabBoxes:"Coffrets &amp; cadeaux",
    tagFav:"populaire", tagPrem:"premium", tagSig:"signature", tagSeason:"saison", tagFav2:"populaire",
    dJalebi:"Spirales croustillantes trempées dans un sirop safrané, servies chaudes.",
    dGulab:"Boulettes de khoya dorées, gorgées de sirop à la rose et à la cardamome.",
    dRasmalai:"Disques de fromage frais dans un lait crémeux au safran et aux pistaches.",
    dKaju:"Losanges fondants aux noix de cajou, feuille d'argent comestible.",
    dBarfi:"Carrés de barfi à la pistache et à la farine de pois chiche torréfiée.",
    dLadoo:"Perles de boondi liées en boules dorées, un classique des fêtes.",
    dSoan:"Cubes feuilletés qui fondent en bouche, garnis de pistaches.",
    dBengali:"Assortiment de délices au lait frais — bengalis et pendjabis.",
    dHalwa:"Carottes mijotées au lait, ghee et cardamome — servi chaud l'hiver.",
    dSamosa:"Pâte feuilletée croustillante, pommes de terre épicées et petits pois. Douzaine 15 $.",
    dTikki:"Galettes de pommes de terre poêlées, chutney tamarin-menthe.",
    dPakora:"Beignets croustillants de légumes à la farine de pois chiche.",
    dChana:"Pois chiches mijotés aux épices, servis avec pain frit. Bol.",
    dNamak:"Craquelins salés croustillants — le grignotage parfait avec le thé.",
    dSev:"Assortiment de namkeen croquants à la farine de pois chiche.",
    dBhel:"Chaat de rue croquant, chutneys aigres-doux et grenade.",
    capNamkeen:"Namkeen",
    box1T:"Coffret assorti", box1D:"Un choix du chef parmi nos mithai les plus populaires, joliment présenté.",
    box1P:"½ lb 12,99 $ · 1 lb 22,99 $ · 2 lb 42,99 $",
    box2T:"Coffret de fête", box2D:"Diwali, Rakhi, Eid ou mariage — coffrets décoratifs avec ruban et bougie diya.",
    box2P:"À partir de 24,99 $",
    box3T:"Plateaux de célébration", box3D:"Grands plateaux de sucreries et de collations pour anniversaires et réceptions.",
    box3P:"Sur mesure — voir Traiteur",
    caterKicker:"Service traiteur", caterTitle:"Adoucissez chaque célébration.",
    caterP1:"Mariages, Diwali, Rakhi, Eid, anniversaires ou réunions au bureau — nous préparons des plateaux de sucreries et de collations, des coffrets-cadeaux et des commandes en gros, adaptés à votre événement et à votre budget.",
    caterL1:"Plateaux de mithai &amp; collations assortis", caterL2:"Coffrets-cadeaux personnalisés pour les fêtes",
    caterL3:"Grandes quantités sur commande", caterL4:"Options végétariennes &amp; véganes",
    caterBtn:"Commander : (450) 682-7774", caterBtn2:"Écrire un courriel",
    caterNote:"Astuce : réservez 48 h à l'avance pour les grandes commandes de fête.",
    visitKicker:"Nous trouver", visitTitle:"Passez nous voir à Chomedey.",
    visitAddr:"Adresse", visitHours:"Heures", visitContact:"Contact",
    dMon:"Lundi", dTue:"Mardi", dWed:"Mercredi", dThu:"Jeudi", dFri:"Vendredi", dSat:"Samedi", dSun:"Dimanche",
    footTag:"Délices indiens authentiques — Chomedey, Laval.", footHours:"Tous les jours · 10 h – 20 h 30",
    footMade:"Fait avec soin à Laval",
  },
  en: {
    topRating:"on Google · 76 reviews", topLoc:"Chomedey, Laval", topHours:"Open every day · 10 am – 8:30 pm",
    navStory:"Our story", navMenu:"Menu", navCatering:"Catering", navVisit:"Find us", navCall:"Call",
    heroKicker:"Indian sweets &amp; snacks · from Laval",
    heroTitle:"Authentic Indian<br><em>delights.</em>",
    heroLede:"Fresh mithai, crispy samosas and festive gift boxes — handmade every day in Chomedey.",
    heroBtnMenu:"See the menu", heroBtnCater:"Catering service",
    trust1:"Google · 76 reviews", trust2N:"100% veg", trust2:"vegan options", trust3N:"Fresh", trust3:"made in-house daily",
    storyBadge:"Sweets &amp; Snacks", storyKicker:"Our story",
    storyTitle:"The taste of home, handmade every morning.",
    storyP1:"At Kirat, every mithai is made in small batches with fresh milk, nuts and a touch of saffron — just like home. Our cases overflow with colourful sweets and crisp savoury snacks, in a spotless space our guests rave about.",
    storyP2:"From Punjabi classics to Bengali favourites, we celebrate the richness of Indian desserts — for an afternoon chai, a gift, or a grand celebration.",
    storyQuote:"“I've never seen a place this clean. The sweets are incredibly fresh and flavourful — top quality all around.”",
    storyCite:"— Manpreet K., Google review ★★★★★",
    stat1:"mithai varieties", stat2:"days open", stat3:"&amp; vegan options",
    menuKicker:"Our menu", menuTitle:"Sweets, snacks &amp; gift boxes",
    menuNote:"Prices are indicative — call us for today's selection and bulk orders.",
    tabSweets:"Sweets (Mithai)", tabSnacks:"Savoury snacks", tabBoxes:"Boxes &amp; gifts",
    tagFav:"popular", tagPrem:"premium", tagSig:"signature", tagSeason:"seasonal", tagFav2:"popular",
    dJalebi:"Crisp spirals soaked in saffron syrup, served warm.",
    dGulab:"Golden khoya dumplings drenched in rose-cardamom syrup.",
    dRasmalai:"Soft cheese discs in creamy saffron-pistachio milk.",
    dKaju:"Melt-in-the-mouth cashew diamonds with edible silver leaf.",
    dBarfi:"Barfi squares with pistachio and toasted chickpea flour.",
    dLadoo:"Fine boondi pearls bound into golden festive balls.",
    dSoan:"Flaky melt-away cubes topped with pistachio.",
    dBengali:"An assortment of fresh-milk delights — Bengali and Punjabi.",
    dHalwa:"Carrots slow-cooked in milk, ghee and cardamom — served warm in winter.",
    dSamosa:"Crisp flaky pastry, spiced potato and peas. Dozen $15.",
    dTikki:"Pan-fried potato patties with tamarind-mint chutney.",
    dPakora:"Crispy vegetable fritters in chickpea batter.",
    dChana:"Spiced simmered chickpeas served with fried bread. Bowl.",
    dNamak:"Crunchy savoury crackers — the perfect snack with chai.",
    dSev:"An assortment of crunchy chickpea-flour namkeen.",
    dBhel:"Crunchy street-style chaat with sweet-sour chutneys and pomegranate.",
    capNamkeen:"Namkeen",
    box1T:"Assorted box", box1D:"A chef's selection of our most-loved mithai, beautifully presented.",
    box1P:"½ lb $12.99 · 1 lb $22.99 · 2 lb $42.99",
    box2T:"Festive gift box", box2D:"Diwali, Rakhi, Eid or wedding — decorative boxes with ribbon and diya lamp.",
    box2P:"From $24.99",
    box3T:"Celebration platters", box3D:"Large trays of sweets and snacks for birthdays and receptions.",
    box3P:"Custom — see Catering",
    caterKicker:"Catering service", caterTitle:"Sweeten every celebration.",
    caterP1:"Weddings, Diwali, Rakhi, Eid, birthdays or office gatherings — we prepare assorted sweet and snack platters, gift boxes and bulk orders, tailored to your event and budget.",
    caterL1:"Assorted mithai &amp; snack platters", caterL2:"Custom gift boxes for festivals",
    caterL3:"Large quantities made to order", caterL4:"Vegetarian &amp; vegan options",
    caterBtn:"Order: (450) 682-7774", caterBtn2:"Send an email",
    caterNote:"Tip: book 48 h ahead for large festival orders.",
    visitKicker:"Find us", visitTitle:"Come see us in Chomedey.",
    visitAddr:"Address", visitHours:"Hours", visitContact:"Contact",
    dMon:"Monday", dTue:"Tuesday", dWed:"Wednesday", dThu:"Thursday", dFri:"Friday", dSat:"Saturday", dSun:"Sunday",
    footTag:"Authentic Indian delights — Chomedey, Laval.", footHours:"Every day · 10 am – 8:30 pm",
    footMade:"Made with care in Laval",
  }
};

function setLang(lang){
  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = dict[el.getAttribute('data-i18n')];
    if(v!=null) el.innerHTML = v;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang__btn').forEach(b=>b.classList.toggle('is-active', b.dataset.lang===lang));
  try{ localStorage.setItem('kirat_lang', lang); }catch(e){}
}

document.addEventListener('DOMContentLoaded', ()=>{
  let saved='fr';
  try{ saved = localStorage.getItem('kirat_lang') || 'fr'; }catch(e){}
  setLang(saved);
  document.querySelectorAll('.lang__btn').forEach(btn=>{
    btn.addEventListener('click', ()=>setLang(btn.dataset.lang));
  });
});

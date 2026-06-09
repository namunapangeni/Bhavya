export const INSTITUTE = {
  name: 'Bhavya Fashion Design Institute (Nepal)',
  shortName: 'BHAVYA',
  fullName: 'FASHION DESIGN TRAINING CENTRE AND BOUTIQUE',
  boutiqueName: 'Bhavya Fashion Boutique and Training Center',
  nepaliName: 'भाव्या',
  tagline: 'BOUTIQUE & TRAINING CENTER',
  address: 'Butwal-9, Ittabhatti, Rupandehi',
  addressShort: 'Butwal-9, Rupandehi',
  phone: '9847026960',
  footerNepali:
    'हामी कहाँ विवाहको लागी दुलहा दुलही सेट ,पास्नी सेट, पार्टी वेर बनाउनुका साथै अर्डर अनुसार सम्पूर्ण ड्रेस तयार गरिन्छ ।',
} as const;

export const DIPLOMA_COURSES = [
  {
    title: 'Garment Construction',
    description: 'Cutting, stitching & finish quality outfits',
  },
  {
    title: 'Design Principles',
    description: 'Learn the fundamentals of colour theory & style development',
  },
  {
    title: 'Pattern Making',
    description: 'Draft patterns for all body types from basic to advanced levels',
  },
  {
    title: 'Textile Knowledge',
    description: 'Understand fabrics, weaves, textures & fabric care',
  },
  {
    title: 'Fashion Illustration',
    description: 'Sketch your fashion ideas',
  },
  {
    title: 'Embroidery Techniques',
    description: 'Hand embroidery, beadwork, threadwork',
  },
  {
    title: 'Boutique Training',
    description: 'Learn customer handling, pricing, display & boutique management',
  },
] as const;

export const CURRICULUM = {
  fashionDesign: {
    title: 'फेसन डिजाइन',
    columns: [
      {
        heading: '३ महिने फेसन डिजाईंन',
        items: [
          'Fashion Illustration',
          'Colouring',
          'Texture Idea',
          'Drafting',
          'Garment Constrction Technique',
        ],
      },
      {
        heading: '१५ महिने एडभान्स फेसन डिजाईंन',
        items: [
          'Fashion Sketching and Illustration',
          'Elements of Design',
          'Prints Creation',
          'Textile Idea',
          'Drafting',
          'Pattern Making Idea',
          'Layout Techniques',
          'Garment Construction Technique',
          'Embroidery Design',
          'Creative Technique',
        ],
      },
    ],
  },
  tailoring: {
    columns: [
      {
        heading: '३ महिने बेसिक टेलरिङ्ग',
        items: [
          'बेसिक नाप तथा इकाईहरु',
          'सिलाई तथा टाँका सम्बन्धी ज्ञान',
          'नाप लिने तरिका',
          'पेटेभोटो',
          'बाबा सर्ट/कट्टु',
          'सादा टोपी',
          'काने टोपी',
          'चारटुक्के पेटीकोट',
          '६ टुक्के पेटीकोट',
          'साधारण फ्रक',
          'बाहुले भोटो',
          'साधारण पाइजामा',
          'साधारण कुर्था',
          'साधारण अम्ब्रेला कुर्था',
          'मेक्सी',
          'साधारण ब्लाउज',
          'साधारण समिज',
          'बेबी सुरुवाल',
          'साधारण प्लाजो सुरुवाल',
        ],
      },
      {
        heading: '६ महिने बेसिक टेलरिङ्ग',
        items: [
          'एप्रोन',
          'ग्यादर फ्रक',
          'स्कुल फ्रक',
          'सादा कुर्था',
          'अम्ब्रेला कुर्था',
          'राउण्डफेर कुर्था',
          'पटियाला सुरुवाल',
          'धोती सुरुवाल',
          'चुडीदार सुरुवाल',
          'प्लाजो',
          'पेन्ट प्लाजो',
          'अम्ब्रेला सुरुवाल',
          'पेटीकोट ४/६ पाटे',
          'पेटीकोट फिस्टेल/बक्स',
          'डिजाईनर ब्लाउज',
          'वानपिस ड्रेस',
          'टप्स',
          'कलर टप्स',
          'लेडिज नाईटी गाउन',
          'चोलो',
          'लेहेङ्गा चोली',
          'क्वाटर पाईन्ट',
          'लेडिज फुल पाईन्ट',
          'ओपन सर्ट',
          'जेन्स कुर्ता/पाईजामा',
          'आसकोट',
          'बन्दी कमीज',
          'जेन्स पाईन्ट (क्रिज भएको/नभएको)',
        ],
      },
    ],
  },
  additional: ['हाते कढाई ३ महिने', 'बेसिक ब्युटी पार्लर (छोटो अवधी)'],
} as const;

export type DraftItem = {
  label: string;
  children?: DraftItem[];
};

export const DRAFT_AND_LAYOUT: DraftItem[] = [
  { label: 'Apron (एप्रोन)' },
  { label: 'A-Line Frock (ए लाइन फ्रक)' },
  { label: 'Gather Frock (ग्यादर फ्रक)' },
  {
    label: 'Petikot (पेटीकोट)',
    children: [
      { label: '4 Panel Petikot (४ पाटे पेटीकोट)' },
      { label: '6 Panel Petikot (६ पाटे पेटीकोट)' },
      { label: 'A line Petikot (ए लाइन पेटीकोट)' },
      { label: 'Fishtail Petikot (फिस टेल पेटीकोट)' },
      { label: 'Can Can Petikot (क्यान क्यान पेटीकोट)' },
    ],
  },
  {
    label: 'Skirt (स्कर्ट)',
    children: [
      { label: 'Pleated Skirt (स्कुल स्कर्ट)' },
      { label: 'Pencil Skirt (पेन्सील स्कर्ट)' },
      { label: 'Overlap Skirt (ओभरल्याप स्कर्ट)' },
    ],
  },
  {
    label: 'Kurta (कुर्ता)',
    children: [
      { label: 'Simple Kurta (सादा कुर्ता)' },
      { label: 'Princess Dart Kurta (प्रिन्सेस आर्ट कुर्ता)' },
      { label: 'Collar Kurta (कलर कुर्ता)' },
    ],
  },
  {
    label: 'Surwal (सुरुवाल)',
    children: [
      { label: 'Simple Surwal (सादा सुरुवाल)' },
      { label: 'Plazo Surwal (प्लाजो सुरुवाल)' },
      { label: 'Patiyala Surwal (पट्याला सुरुवाल)' },
      { label: 'Dhoti Surwal (धोती सुरुवाल)' },
      { label: 'Chudidar Surwal (चुडिदार सुरुवाल)' },
    ],
  },
  { label: 'Umbrella Kurta and Anarkai (अम्ब्रेला कुर्ता र अनारकली)' },
  {
    label: 'Blouse (ब्लाउज)',
    children: [
      { label: 'Simple Blouse (सादा ब्लाउज)' },
      { label: 'Princess Dart Blouse (प्रिन्सेस आर्ट ब्लाउज)' },
      { label: 'Piping Blouse (पाइपिङ्ग ब्लाउज)' },
      { label: 'Chinese Collar Blouse (चाइनिज कलर ब्लाउज)' },
      { label: 'Coat Collar Blouse (कोट कलर ब्लाउज)' },
      { label: 'Cup Blouse (आई कप ब्लाउज)' },
      { label: 'Design in Self Choice (४ वटा डिजाइन आफ्नो इच्छाको)' },
    ],
  },
  {
    label: 'Lehenga (लेहेंगा)',
    children: [
      { label: 'Circular Lehenga (सर्कुलर लेहेंगा)' },
      { label: 'Pannel Lehenga (प्यानल लेहेंगा)' },
      { label: 'Fishtail Lehenga (फिस टेल लेहेंगा)' },
      { label: 'Bridal Lehenga (ब्राइडल लेहेंगा)' },
    ],
  },
  {
    label: 'Gown Design (गाउन डिजाइन)',
    children: [
      { label: 'Bodycon Gown (बडीकन गाउन)' },
      { label: 'Pannel Gown (प्यानल गाउन)' },
    ],
  },
  {
    label: 'Pasni Set (पास्नी सेट)',
    children: [
      {
        label: 'Boys (केटा)',
        children: [
          { label: 'Bhoto (भोटो)' },
          { label: 'Cholo (चोलो)' },
          { label: 'Surwal (सुरुवाल)' },
          { label: 'Topi (टोपी)' },
          { label: 'Shoes (जुत्ता)' },
        ],
      },
      {
        label: 'Girls (केटी)',
        children: [
          { label: 'Frok (फ्रक)' },
          { label: 'Surwal (सुरुवाल)' },
          { label: 'Hair Band (हेयर ब्यान्ड)' },
          { label: 'Shoes (जुत्ता)' },
        ],
      },
    ],
  },
  {
    label: 'Cholo (चोलो)',
    children: [
      { label: 'Simple Cholo (सादा चोलो)' },
      { label: 'Kharpa Cholo (खार्पा चोलो)' },
    ],
  },
  {
    label: 'Night Dress (नाइट ड्रेस)',
    children: [
      { label: 'Overlap Gown (ओभर ल्याप गाउन)' },
      { label: 'Plazo + Shirt (प्लाजो र सर्ट)' },
    ],
  },
  {
    label: 'Blazer Set (ब्लेजर सेट)',
    children: [
      { label: 'Shirt (सर्ट)' },
      { label: 'Pant (प्यान्ट)' },
      { label: 'Blazer (ब्लेजर)' },
    ],
  },
  {
    label: 'Gents Items (जेन्स आइटम)',
    children: [{ label: 'Kurta and Surwal (कुर्ता सुरुवाल)' }],
  },
];

export const GENERAL_TOPICS = [
  'Embroidery (हाते कढाई)',
  'Types of Laces (लेसको प्रकार)',
  'Types of button (बटनको प्रकार)',
  'Types of Cloth (कपडाको प्रकार)',
  'Types of Tiedye (टाइडाइका प्रकार)',
  'Chura Making (चुरा बनाउने)',
] as const;

export const SKETCHING_BASIC_GROUPS = [
  {
    roman: 'I',
    items: [
      'Neck Line',
      'Tucks',
      'Collars',
      'Yokes',
      'Sleeves',
      'Pocket',
      'West Line',
    ],
  },
  {
    roman: 'II',
    items: [
      'Nose',
      'Eyes',
      'Ears',
      'Lips',
      'Head Moment',
      'Hands',
      'Legs',
      'Hair Style',
    ],
  },
] as const;

export const SKETCHING_OTHER = [
  'Color file I^st and II^nd file',
  'Textile file',
  'Texture file',
  '10½ and 12½ file',
  'Pencil Technique Shirring and Color Shading file',
] as const;

export const SKETCHING = {
  title: 'SKETCHING',
} as const;

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/admission', label: 'Admission' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
] as const;

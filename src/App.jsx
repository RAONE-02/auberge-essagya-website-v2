import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Star, Users, Utensils, Wifi, Car, Waves, Mountain, Calendar, Globe, Menu, X, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './App.css';

// Import logo only
import logo from './assets/logo_updated.png';

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن النزل',
      gallery: 'معرض الصور',
      pricing: 'الأسعار',
      services: 'الخدمات',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'نزل الساقية',
      subtitle: 'تجربة فريدة في قلب الصحراء الموريتانية',
      description: 'اكتشف جمال الصحراء وتراث موريتانيا الأصيل في نزل الساقية، حيث الضيافة العربية الأصيلة تلتقي بالراحة الحديثة',
      bookNow: 'احجز الآن',
      exploreMore: 'اكتشف المزيد'
    },
    about: {
      title: 'عن نزل الساقية',
      description: 'يقع نزل الساقية في ولاية تكانت بموريتانيا على بعد 4 كيلومترات من مدينة الرشيد التاريخية. يقدم النزل تجربة فريدة للضيوف من مختلف أنحاء العالم حيث يوفر لهم فرصة للتعرف على الثقافة والتراث الغنيين للصحراء الموريتانية.',
      features: [
        'موقع صحراوي خلاب محاط بواحات النخيل وكثبان الرمال الذهبية',
        'غرف مجهزة بجميع وسائل الراحة الحديثة وخيام تقليدية',
        'أشهى المأكولات الموريتانية الأصيلة',
        'فرصة الاسترخاء في واحة النخيل وشرب الشاي الموريتاني الأصيل',
        'رحلات استكشافية للمنطقة والمواقع التاريخية'
      ]
    },
    services: {
      title: 'خدماتنا',
      accommodation: {
        title: 'الإقامة',
        description: 'غرف مريحة وخيام تقليدية'
      },
      dining: {
        title: 'المطعم',
        description: 'مأكولات موريتانية أصيلة'
      },
      tours: {
        title: 'الرحلات',
        description: 'جولات استكشافية في الصحراء'
      },
      transport: {
        title: 'النقل',
        description: 'خدمات النقل والمواصلات'
      }
    },
    contact: {
      title: 'اتصل بنا',
      owner: 'المالك: يسلم مينوه',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      location: 'الموقع',
      address: 'R7HX+7V, الرشيد, موريتانيا',
      chatPlaceholder: 'اكتب رسالتك هنا...',
      sendMessage: 'إرسال الرسالة',
      callNow: 'اتصل الآن',
      emailUs: 'راسلنا',
      viewOnMap: 'عرض على الخريطة'
    },
    gallery: {
      title: 'معرض الصور'
    },
    pricing: {
      title: 'الأسعار والعروض',
      subtitle: 'اختر الإقامة المناسبة لك',
      room: {
        title: 'الغرف',
        price: '1,200',
        currency: 'أوقية موريتانية',
        features: ['مكيف هواء', 'حمام خاص', 'إطلالة على الواحة', 'واي فاي مجاني']
      },
      tent: {
        title: 'الخيمة التقليدية',
        price: '800',
        currency: 'أوقية موريتانية',
        features: ['تجربة أصيلة', 'فراش تقليدي', 'إطلالة على الصحراء', 'هدوء تام']
      },
      oasis: {
        title: 'غرف الزعف - واحة النخيل',
        price: '1,000',
        currency: 'أوقية موريتانية',
        features: ['في قلب الواحة', 'محاط بالنخيل', 'هواء طبيعي', 'صوت الطبيعة']
      },
      note: 'الأسعار شاملة الإفطار والعشاء'
    },
    booking: {
      title: 'حجز غرفة',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      checkIn: 'تاريخ الوصول',
      checkOut: 'تاريخ المغادرة',
      guests: 'عدد الضيوف',
      roomType: 'نوع الغرفة',
      roomTypes: {
        standard: 'غرفة عادية',
        deluxe: 'غرفة فاخرة',
        tent: 'خيمة تقليدية',
        suite: 'جناح'
      },
      message: 'رسالة إضافية (اختياري)',
      submit: 'إرسال طلب الحجز',
      cancel: 'إلغاء',
      success: 'تم إرسال طلب الحجز بنجاح!',
      error: 'حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      pricing: 'Pricing',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      title: 'Auberge Essagya',
      subtitle: 'A Unique Experience in the Heart of the Mauritanian Desert',
      description: 'Discover the beauty of the desert and authentic Mauritanian heritage at Auberge Essagya, where authentic Arab hospitality meets modern comfort',
      bookNow: 'Book Now',
      exploreMore: 'Explore More'
    },
    about: {
      title: 'About Auberge Essagya',
      description: 'Auberge Essagya is located in the Tagant region of Mauritania, 4 kilometers from the historic city of Rachid. The inn offers a unique experience for guests from around the world, providing them with the opportunity to discover the rich culture and heritage of the Mauritanian desert.',
      features: [
        'Stunning desert location surrounded by palm trees and golden sand dunes',
        'Rooms equipped with all modern amenities and traditional tents',
        'Delicious authentic Mauritanian cuisine',
        'Opportunity to relax in the palm oasis and enjoy authentic Mauritanian tea',
        'Exploratory trips to the region and historical sites'
      ]
    },
    services: {
      title: 'Our Services',
      accommodation: {
        title: 'Accommodation',
        description: 'Comfortable rooms and traditional tents'
      },
      dining: {
        title: 'Restaurant',
        description: 'Authentic Mauritanian cuisine'
      },
      tours: {
        title: 'Tours',
        description: 'Desert exploration tours'
      },
      transport: {
        title: 'Transport',
        description: 'Transportation services'
      }
    },
    contact: {
      title: 'Contact Us',
      owner: 'Owner: Yeslem Meinouh',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      address: 'R7HX+7V, Rachid, Mauritania',
      chatPlaceholder: 'Type your message here...',
      sendMessage: 'Send Message',
      callNow: 'Call Now',
      emailUs: 'Email Us',
      viewOnMap: 'View on Map'
    },
    gallery: {
      title: 'Photo Gallery'
    },
    pricing: {
      title: 'Prices & Offers',
      subtitle: 'Choose the accommodation that suits you',
      room: {
        title: 'Rooms',
        price: '1,200',
        currency: 'Mauritanian Ouguiya',
        features: ['Air conditioning', 'Private bathroom', 'Oasis view', 'Free WiFi']
      },
      tent: {
        title: 'Traditional Tent',
        price: '800',
        currency: 'Mauritanian Ouguiya',
        features: ['Authentic experience', 'Traditional bedding', 'Desert view', 'Complete tranquility']
      },
      oasis: {
        title: 'Zaaf Rooms - Palm Oasis',
        price: '1,000',
        currency: 'Mauritanian Ouguiya',
        features: ['In the heart of oasis', 'Surrounded by palms', 'Natural air', 'Nature sounds']
      },
      note: 'Prices include breakfast and dinner'
    },
    booking: {
      title: 'Book a Room',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      guests: 'Number of Guests',
      roomType: 'Room Type',
      roomTypes: {
        standard: 'Standard Room',
        deluxe: 'Deluxe Room',
        tent: 'Traditional Tent',
        suite: 'Suite'
      },
      message: 'Additional Message (Optional)',
      submit: 'Submit Booking Request',
      cancel: 'Cancel',
      success: 'Booking request sent successfully!',
      error: 'An error occurred while sending the request. Please try again.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      gallery: 'Galerie',
      pricing: 'Prix',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      title: 'Auberge Essagya',
      subtitle: 'Une Expérience Unique au Cœur du Désert Mauritanien',
      description: 'Découvrez la beauté du désert et le patrimoine authentique mauritanien à l\'Auberge Essagya, où l\'hospitalité arabe authentique rencontre le confort moderne',
      bookNow: 'Réserver',
      exploreMore: 'Explorer Plus'
    },
    about: {
      title: 'À propos de l\'Auberge Essagya',
      description: 'L\'Auberge Essagya est située dans la région du Tagant en Mauritanie, à 4 kilomètres de la ville historique de Rachid. L\'auberge offre une expérience unique aux clients du monde entier, leur donnant l\'opportunité de découvrir la riche culture et le patrimoine du désert mauritanien.',
      features: [
        'Emplacement désertique magnifique entouré de palmiers et de dunes de sable doré',
        'Chambres équipées de tout le confort moderne et tentes traditionnelles',
        'Délicieuse cuisine mauritanienne authentique',
        'Possibilité de se détendre dans l\'oasis de palmiers et de déguster le thé mauritanien authentique',
        'Voyages d\'exploration dans la région et sites historiques'
      ]
    },
    services: {
      title: 'Nos Services',
      accommodation: {
        title: 'Hébergement',
        description: 'Chambres confortables et tentes traditionnelles'
      },
      dining: {
        title: 'Restaurant',
        description: 'Cuisine mauritanienne authentique'
      },
      tours: {
        title: 'Excursions',
        description: 'Tours d\'exploration du désert'
      },
      transport: {
        title: 'Transport',
        description: 'Services de transport'
      }
    },
    contact: {
      title: 'Contactez-nous',
      owner: 'Propriétaire: Yeslem Meinouh',
      phone: 'Téléphone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Localisation',
      address: 'R7HX+7V, Rachid, Mauritanie',
      chatPlaceholder: 'Tapez votre message ici...',
      sendMessage: 'Envoyer le Message',
      callNow: 'Appeler',
      emailUs: 'Nous Écrire',
      viewOnMap: 'Voir sur la Carte'
    },
    gallery: {
      title: 'Galerie Photos'
    },
    pricing: {
      title: 'Prix & Offres',
      subtitle: 'Choisissez l\'hébergement qui vous convient',
      room: {
        title: 'Chambres',
        price: '1,200',
        currency: 'Ouguiya Mauritanienne',
        features: ['Climatisation', 'Salle de bain privée', 'Vue sur l\'oasis', 'WiFi gratuit']
      },
      tent: {
        title: 'Tente Traditionnelle',
        price: '800',
        currency: 'Ouguiya Mauritanienne',
        features: ['Expérience authentique', 'Literie traditionnelle', 'Vue sur le désert', 'Tranquillité totale']
      },
      oasis: {
        title: 'Chambres Zaaf - Oasis de Palmiers',
        price: '1,000',
        currency: 'Ouguiya Mauritanienne',
        features: ['Au cœur de l\'oasis', 'Entouré de palmiers', 'Air naturel', 'Sons de la nature']
      },
      note: 'Prix incluant petit-déjeuner et dîner'
    },
    booking: {
      title: 'Réserver une Chambre',
      name: 'Nom Complet',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone',
      checkIn: 'Date d\'Arrivée',
      checkOut: 'Date de Départ',
      guests: 'Nombre d\'Invités',
      roomType: 'Type de Chambre',
      roomTypes: {
        standard: 'Chambre Standard',
        deluxe: 'Chambre Deluxe',
        tent: 'Tente Traditionnelle',
        suite: 'Suite'
      },
      message: 'Message Supplémentaire (Optionnel)',
      submit: 'Envoyer la Demande de Réservation',
      cancel: 'Annuler',
      success: 'Demande de réservation envoyée avec succès!',
      error: 'Une erreur s\'est produite lors de l\'envoi de la demande. Veuillez réessayer.'
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
    message: ''
  });

  const t = translations[currentLang];

  const images = [
    '/images/IMG-20250706-WA0000.jpg',
    '/images/IMG-20250706-WA0001.jpg',
    '/images/IMG-20250706-WA0002.jpg',
    '/images/IMG-20250706-WA0003.jpg',
    '/images/IMG-20250706-WA0004.jpg',
    '/images/IMG-20250706-WA0005.jpg',
    '/images/IMG-20250706-WA0006.jpg',
    '/images/IMG-20250706-WA0007.jpg',
    '/images/IMG-20250706-WA0008.jpg',
    '/images/IMG-20250706-WA0009.jpg',
    '/images/IMG-20250706-WA0010.jpg',
    '/images/IMG-20250706-WA0011.jpg',
    '/images/IMG-20250706-WA0012.jpg',
    '/images/IMG-20250706-WA0013.jpg',
    '/images/IMG-20250706-WA0014.jpg'
  ];

  const handleWhatsAppMessage = () => {
    if (chatMessage.trim()) {
      const encodedMessage = encodeURIComponent(chatMessage);
      window.open(`https://wa.me/22241377131?text=${encodedMessage}`, '_blank');
      setChatMessage('');
    } else {
      // إذا لم تكن هناك رسالة، افتح واتساب مباشرة للحجز
      const defaultMessage = encodeURIComponent('مرحباً، أود حجز غرفة في نزل الساقية. يرجى تزويدي بالتفاصيل والأسعار.');
      window.open(`https://wa.me/22241377131?text=${defaultMessage}`, '_blank');
    }
  };

  const handleCall = () => {
    window.open('tel:+22241377131', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:sidahmedhedya59@gmail.com', '_self');
  };

  const handleMapView = () => {
    window.open('https://maps.google.com/?q=R7HX+7V,Rachid,Mauritania', '_blank');
  };

  const openLightbox = (imageIndex) => {
    setSelectedImage(imageIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSubmitStatus(null);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: 'standard',
      message: ''
    });
  };

  const handleBookingFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Initialize EmailJS
    emailjs.init('vnnH3RTDW1urYhKWU');

    // Prepare template parameters
    const templateParams = {
      to_name: 'يسلم مينوه', // اسم المالك
      from_name: bookingForm.name,
      from_email: bookingForm.email,
      phone: bookingForm.phone,
      check_in: bookingForm.checkIn,
      check_out: bookingForm.checkOut,
      guests: bookingForm.guests,
      room_type: t.booking.roomTypes[bookingForm.roomType],
      message: bookingForm.message || 'لا توجد رسالة إضافية',
      booking_date: new Date().toLocaleDateString('ar-SA'),
      booking_time: new Date().toLocaleTimeString('ar-SA')
    };

    try {
      const response = await emailjs.send(
        'service_wttkfd9',
        'template_rg0q1h9',
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // إغلاق النافذة بعد 3 ثوان
      setTimeout(() => {
        closeBookingModal();
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl">🏕️</span>
                  <span className="text-2xl">🌴</span>
                </div>
                <div className="text-xl font-bold text-amber-600">
                  <span className="block text-lg leading-tight">Auberge</span>
                  <span className="block text-lg leading-tight">Essagya</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.entries(t.nav).map(([key, value]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === key
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-700 hover:bg-amber-100 hover:text-amber-800'
                    }`}
                  >
                    {value}
                  </a>
                ))}
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              {['ar', 'en', 'fr'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    currentLang === lang
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-600 hover:bg-amber-100'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-amber-100"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-100"
                >
                  {value}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/hero-bg.jpg)`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in-delay-1">
            {t.hero.subtitle}
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={openBookingModal}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              {t.hero.bookNow}
            </button>
            <a
              href="#about"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {t.hero.exploreMore}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t.about.description}
              </p>
              <ul className="space-y-4">
                {t.about.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/screenshot_4.jpg" alt="Desert Oasis" className="rounded-lg shadow-lg" />
              <img src="/images/screenshot_7.jpg" alt="Traditional Tent" className="rounded-lg shadow-lg" />
              <img src="/images/screenshot_6.jpg" alt="Palm Trees" className="rounded-lg shadow-lg" />
              <img src="/images/screenshot_9.jpg" alt="Desert Camp" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.gallery.title}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`صورة ${index + 1} من نزل الساقية`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 lazy-image"
                      loading="lazy"
                      onLoad={(e) => e.target.setAttribute('data-loaded', 'true')}
                      onError={(e) => e.target.setAttribute('data-loaded', 'false')}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <div className="bg-white bg-opacity-20 rounded-full p-3 backdrop-blur-sm">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                        <p className="mt-2 text-sm font-semibold">عرض الصورة</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <img
                src={images[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'accommodation', icon: Users },
              { key: 'dining', icon: Utensils },
              { key: 'tours', icon: Mountain },
              { key: 'transport', icon: Car }
            ].map(({ key, icon: Icon }) => (
              <div key={key} className="text-center p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
                <Icon className="mx-auto mb-4 text-amber-600" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {t.services[key].title}
                </h3>
                <p className="text-gray-600">
                  {t.services[key].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.pricing.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-amber-100">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{t.pricing.room.title}</h3>
                <div className="text-4xl font-bold mb-2">{t.pricing.room.price}</div>
                <div className="text-sm opacity-90">{t.pricing.room.currency}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {t.pricing.room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full mt-6 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold"
                >
                  احجز الآن
                </button>
              </div>
            </div>

            {/* Tent Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-amber-100 relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                الأكثر شعبية
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{t.pricing.tent.title}</h3>
                <div className="text-4xl font-bold mb-2">{t.pricing.tent.price}</div>
                <div className="text-sm opacity-90">{t.pricing.tent.currency}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {t.pricing.tent.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
                >
                  احجز الآن
                </button>
              </div>
            </div>

            {/* Oasis Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-amber-100">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{t.pricing.oasis.title}</h3>
                <div className="text-4xl font-bold mb-2">{t.pricing.oasis.price}</div>
                <div className="text-sm opacity-90">{t.pricing.oasis.currency}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {t.pricing.oasis.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  احجز الآن
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 bg-white px-6 py-3 rounded-lg shadow-md inline-block">
              <span className="text-amber-600 font-semibold">ملاحظة:</span> {t.pricing.note}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t.contact.owner}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">{t.contact.phone}</p>
                    <p className="text-gray-300">+222 41 37 71 31</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">{t.contact.email}</p>
                    <p className="text-gray-300">sidahmedhedya59@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">{t.contact.whatsapp}</p>
                    <p className="text-gray-300">+222 41 37 71 31</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">{t.contact.location}</p>
                    <p className="text-gray-300">{t.contact.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {/* WhatsApp - الأولوية الأولى */}
                <a
                  href="https://wa.me/22241377131?text=مرحباً، أريد الاستفسار عن نزل الساقية"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={20} />
                  واتساب - تواصل فوري
                </a>
                
                {/* Phone - الأولوية الثانية */}
                <button
                  onClick={handleCall}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <Phone size={20} />
                  {t.contact.callNow}
                </button>
                
                {/* Email - الأولوية الثالثة */}
                <button
                  onClick={handleEmail}
                  className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <Mail size={20} />
                  {t.contact.emailUs}
                </button>
                
                {/* Map - الأولوية الرابعة */}
                <button
                  onClick={handleMapView}
                  className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
                >
                  <MapPin size={20} />
                  {t.contact.viewOnMap}
                </button>
              </div>
            </div>
            
            {/* Chat Widget */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.contact.whatsapp}</h3>
              <div className="space-y-4">
                <textarea
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder={t.contact.chatPlaceholder}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none h-32"
                  rows={4}
                />
                <button
                  onClick={handleWhatsAppMessage}
                  disabled={!chatMessage.trim()}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {t.contact.sendMessage}
                </button>
              </div>
            </div>
            
            {/* Interactive Google Map */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-amber-500" size={24} />
                  الموقع على الخريطة
                </h3>
                <div className="bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0!2d-11.696358!3d18.825261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ5JzMwLjkiTiAxMcKwNDEnNDYuOSJX!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع نزل الساقية"
                  ></iframe>
                  <div className="p-4 text-center">
                    <p className="text-gray-300 text-sm">
                      📍 نزل الساقية - الرشيد، موريتانيا
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      الإحداثيات: 18.825261, -11.696358
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Calendar className="text-amber-600" size={32} />
                  {t.booking.title}
                </h2>
                <button
                  onClick={closeBookingModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  disabled={isSubmitting}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 shadow-md">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <p className="text-green-800 font-semibold">✅ تم إرسال طلب الحجز بنجاح!</p>
                    <p className="text-green-600 text-sm">سيتم التواصل معك قريباً لتأكيد الحجز</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="text-red-600" size={24} />
                    <div>
                      <p className="text-red-800 font-semibold">❌ حدث خطأ في إرسال طلب الحجز</p>
                      <p className="text-red-600 text-sm">يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-amber-800 text-sm font-medium mb-2">💡 بديل سريع:</p>
                    <a
                      href="https://wa.me/22241377131?text=مرحباً، أريد حجز غرفة في نزل الساقية"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                    >
                      <MessageCircle size={16} />
                      تواصل معنا عبر الواتساب لحجز موعدك
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleBookingFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleBookingFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleBookingFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                      placeholder="+222 XX XX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.guests} *
                    </label>
                    <select
                      name="guests"
                      value={bookingForm.guests}
                      onChange={handleBookingFormChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'ضيف' : 'ضيوف'}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.checkIn} *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={bookingForm.checkIn}
                      onChange={handleBookingFormChange}
                      required
                      disabled={isSubmitting}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.checkOut} *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={bookingForm.checkOut}
                      onChange={handleBookingFormChange}
                      required
                      disabled={isSubmitting}
                      min={bookingForm.checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    {t.booking.roomType} *
                  </label>
                  <select
                    name="roomType"
                    value={bookingForm.roomType}
                    onChange={handleBookingFormChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100"
                  >
                    {Object.entries(t.booking.roomTypes).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    {t.booking.message}
                  </label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleBookingFormChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100 resize-none"
                    placeholder="أي طلبات خاصة أو ملاحظات إضافية..."
                  />
                </div>
                
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        جاري الإرسال...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        تم الإرسال بنجاح
                      </>
                    ) : (
                      <>
                        <Mail size={20} />
                        {t.booking.submit}
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    disabled={isSubmitting}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 px-6 py-4 rounded-lg font-semibold transition-all disabled:cursor-not-allowed"
                  >
                    {t.booking.cancel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={logo} alt="Auberge Essagya" className="h-16 w-auto mx-auto mb-4" />
          <p className="text-gray-400">
            © 2025 Auberge Essagya - نزل الساقية. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


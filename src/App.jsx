import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Star, Users, Utensils, Wifi, Car, Waves, Mountain, Calendar, Globe, Menu, X } from 'lucide-react';
import './App.css';

// Import images
import logo from './assets/logo_updated.png';
import screenshot1 from './assets/screenshot_1.jpg';
import screenshot2 from './assets/screenshot_2.jpg';
import screenshot3 from './assets/screenshot_3.jpg';
import screenshot4 from './assets/screenshot_4.jpg';
import screenshot5 from './assets/screenshot_5.jpg';
import screenshot6 from './assets/screenshot_6.jpg';
import screenshot7 from './assets/screenshot_7.jpg';
import screenshot8 from './assets/screenshot_8.jpg';
import screenshot9 from './assets/screenshot_9.jpg';
// Additional Mauritania images
import tagantLandscape from './assets/ukWg241f81Gx.jpg';
import rachidOasis from './assets/LrNfE2bQuSVU.jpg';
import mauritaniaDesert from './assets/NIuKsRsAwSuC.jpg';
import traditionalArch from './assets/Udr2lnFAXNkk.jpg';
import desertOasis from './assets/5lSsptzOOOV2.jpg';
import rachidVillage from './assets/vYJeVnICXUPC.jpg';
import tagantPlateau from './assets/eT0O59NBeyEX.jpg';
import mauritaniaOasis from './assets/imxodHGvLwti.jpg';

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن النزل',
      gallery: 'معرض الصور',
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
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
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
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      gallery: 'Galerie',
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
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[currentLang];

  const images = [
    screenshot1, screenshot2, screenshot3, screenshot4, screenshot5,
    screenshot6, screenshot7, screenshot8, screenshot9,
    tagantLandscape, rachidOasis, mauritaniaDesert, traditionalArch, 
    desertOasis, rachidVillage, tagantPlateau, mauritaniaOasis
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
              <img src={logo} alt="Auberge Essagya" className="h-12 w-auto" />
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${screenshot5})`,
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
              onClick={handleWhatsAppMessage}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
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
              <img src={screenshot4} alt="Desert Oasis" className="rounded-lg shadow-lg" />
              <img src={screenshot7} alt="Traditional Tent" className="rounded-lg shadow-lg" />
              <img src={screenshot6} alt="Palm Trees" className="rounded-lg shadow-lg" />
              <img src={screenshot9} alt="Desert Camp" className="rounded-lg shadow-lg" />
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
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
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
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleCall}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Phone size={20} />
                  {t.contact.callNow}
                </button>
                
                <button
                  onClick={handleEmail}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Mail size={20} />
                  {t.contact.emailUs}
                </button>
                
                <button
                  onClick={handleMapView}
                  className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
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
          </div>
        </div>
      </section>

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


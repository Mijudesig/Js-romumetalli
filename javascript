const translations = {
  fi: {
    nav_about: "Tietoa meistä",
    nav_services: "Palvelut",
    nav_gallery: "Galleria",
    nav_contact: "Yhteystiedot",
    hero_title: "Romumetallin kierrätys ja purkutyöt",
    hero_subtitle: "Luotettava kumppanisi metallin kierrätyksessä",
    about_title: "Tietoa meistä",
    about_text:
      "JS-Romumetalli ja purkutyöt Oy on erikoistunut metallin kierrätykseen ja purkutöihin. Tarjoamme palveluita yksityisille ja yrityksille.",
    services_title: "Palvelut",
    service1: "Romumetallin keräys ja osto",
    service2: "Ajoneuvojen romutus",
    service3: "Rakennusten purkutyöt",
    service4: "Kuparin ja alumiinin osto",
    gallery_title: "Galleria",
    contact_title: "Yhteystiedot",
    address_label: "Osoite:",
    phone_label: "Puhelin:",
    email_label: "Sähköposti:"
  },
  en: {
    nav_about: "About Us",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_title: "Scrap Metal Recycling and Demolition",
    hero_subtitle: "Your trusted partner in metal recycling",
    about_title: "About Us",
    about_text:
      "JS-Romumetalli ja purkutyöt Oy specializes in metal recycling and demolition work. We offer services to individuals and businesses.",
    services_title: "Services",
    service1: "Scrap metal collection and purchase",
    service2: "Vehicle dismantling",
    service3: "Building demolition",
    service4: "Copper and aluminum purchase",
    gallery_title: "Gallery",
    contact_title: "Contact",
    address_label: "Address:",
    phone_label: "Phone:",
    email_label: "Email:"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}


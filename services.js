(() => {
  const services = [
    {
      name: "Plumbing",
      icon: "🔧",
      tag: "Most popular",
      description: "Get help with leaking taps, blocked drains, pipe repairs and bathroom plumbing.",
      features: ["Leak repairs", "Blocked drains", "Tap and pipe repair", "Bathroom plumbing"]
    },
    {
      name: "Electrical Repairs",
      icon: "⚡",
      tag: "Same-day",
      description: "Professional electrical assistance for household repairs and installations.",
      features: ["Switch and socket repair", "Lighting installation", "Electrical troubleshooting", "House wiring support"]
    },
    {
      name: "Home Cleaning",
      icon: "🧹",
      tag: "Popular",
      description: "Keep your home fresh and clean with professional home cleaning services.",
      features: ["Deep cleaning", "Kitchen cleaning", "Bathroom cleaning", "General home cleaning"]
    },
    {
      name: "Painting",
      icon: "🎨",
      description: "Refresh your home with professional interior and exterior painting services.",
      features: ["Interior painting", "Exterior painting", "Wall preparation", "Touch-up painting"]
    },
    {
      name: "Appliance Repair",
      icon: "🔌",
      description: "Get assistance with household appliance problems from experienced technicians.",
      features: ["Washing machine repair", "Refrigerator repair", "Microwave repair", "General appliance issues"]
    },
    {
      name: "Carpentry",
      icon: "🪚",
      description: "Professional carpentry services for furniture, doors, shelves and household repairs.",
      features: ["Furniture repair", "Door repair", "Shelf installation", "Woodwork"]
    },
    {
      name: "Pest Control",
      icon: "🛡️",
      description: "Professional pest-control assistance for common household pest problems.",
      features: ["General pest control", "Ant control", "Cockroach control", "Preventive treatment"]
    },
    {
      name: "AC Servicing",
      icon: "❄️",
      tag: "Same-day",
      description: "Keep your air conditioner running efficiently with professional servicing.",
      features: ["AC cleaning", "Routine servicing", "Cooling issues", "AC inspection"]
    }
  ];

  window.homeHeroServices = services;

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  document.querySelectorAll("[data-service-cards]").forEach((container) => {
    const detailed = container.dataset.serviceCards === "detailed";
    container.innerHTML = services.map((service) => {
      const name = escapeHTML(service.name);
      const icon = escapeHTML(service.icon);
      const description = escapeHTML(service.description);
      const bookingUrl = `collegeproject.html.html?service=${encodeURIComponent(service.name)}#booking`;

      if (!detailed) {
        return `<article class="service-card">
          <div class="service-card__icon" aria-hidden="true">${icon}</div>
          <h3>${name}</h3>
          <p>${description}</p>
          <a class="btn btn--accent btn--block" href="${bookingUrl}">Book ${name}</a>
        </article>`;
      }

      const tag = service.tag
        ? `<span class="service-page-card__tag">${escapeHTML(service.tag)}</span>`
        : "";
      const features = service.features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join("");

      return `<article class="service-page-card">
        <div class="service-page-card__icon" aria-hidden="true">${icon}</div>
        ${tag}
        <h3>${name}</h3>
        <p>${description}</p>
        <ul>${features}</ul>
        <a class="btn btn--accent btn--block service-book" href="${bookingUrl}" data-service="${name}">Book ${name}</a>
      </article>`;
    }).join("");
  });

  const bookingSelect = document.getElementById("service");
  if (bookingSelect) {
    services.forEach((service) => {
      bookingSelect.add(new Option(service.name, service.name));
    });
  }
})();
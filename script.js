// Configuration data - easily editable
const config = {
  profile: {
    name: "Vinnzz",
    username: "@itsV1nnzz",
    tagline: "Desainer • Editor • Kreator • Programer",
    imageUrl: "./photo.webp",
    tiktokUsername: "itsv1nnzz"
  },
  links: {
    whatsappAmPrem: {
      url: "https://wa.me/6285836286701?text=mau+order+apk+prem+Vinnzz"
    },
    whatsappChannel: {
      url: "https://whatsapp.com/channel/0029Vb4f6xp8KMqt9kzMfP0V"
    },
    jasaWebsite: {
      url: "https://wa.me/6287793507497?text=Halo+Vinnzz,+saya+ingin+tanya+jasa+pembuatan+website"
    },
    paidEdit: {
      url: "https://wa.me/6287793507497?text=Halo+Vinnzz,+saya+ingin+order+Paid+Edit"
    },
    portfolio: {
      url: "#"
    },
    product: {
      url: "https://lynk.id/kevinnazar"
    },
    instagram: {
      username: "itsv1nnzz"
    },
    github: {
      username: "Vinnzz-coy"
    },
    youtube: {
      url: "https://youtube.com/@Vinnzz_coy"
    },
    twitter: {
      username: "ItsVinnzz"
    },
    email: {
      address: "kevinnazar76@gmail.com"
    }
  },
  background: {
    imageUrl: "./background.webp"
  },
  analytics: {
    enabled: true,
  }
};
document.addEventListener('DOMContentLoaded', function () {
  // Real-time Year
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (config.background.imageUrl) {
    document.querySelector('.background-container').style.backgroundImage = `url('${config.background.imageUrl}')`;
  }

  if (config.profile.imageUrl) {
    const profileImage = document.getElementById('profileImage');
    profileImage.innerHTML = '';
    const img = document.createElement('img');
    img.src = config.profile.imageUrl;
    img.alt = `${config.profile.name}`;
    img.className = 'profile-image'; // Use external class
    profileImage.appendChild(img);
  }

  // Set Profile Data
  document.getElementById('profileName').textContent = config.profile.name;
  document.getElementById('profileUsername').textContent = config.profile.username;
  document.getElementById('profileTagline').textContent = config.profile.tagline;
  
  const profileTikTokLink = document.getElementById('profileTikTokLink');
  if (profileTikTokLink) {
    profileTikTokLink.href = `https://www.tiktok.com/${config.profile.tiktokUsername.startsWith('@') ? '' : '@'}${config.profile.tiktokUsername}`;
  }

  // Set Links
  const whatsappLink = document.getElementById('whatsappLink');
  whatsappLink.href = config.links.whatsappAmPrem.url;

  const whatsappChannelLink = document.getElementById('whatsappChannelLink');
  whatsappChannelLink.href = config.links.whatsappChannel.url;

  const jasaWebsiteLink = document.getElementById('jasaWebsiteLink');
  jasaWebsiteLink.href = config.links.jasaWebsite.url;

  const paidEditLink = document.getElementById('paidEditLink');
  if (paidEditLink) {
    paidEditLink.href = config.links.paidEdit.url;
  }

  const portfolioLink = document.getElementById('portfolioLink');
  portfolioLink.href = config.links.portfolio.url;

  const productLink = document.getElementById('productLink');
  productLink.href = config.links.product.url;

  const instagramLink = document.getElementById('instagramLink');
  instagramLink.href = `https://instagram.com/${config.links.instagram.username}`;

  document.getElementById('githubLink').href = `https://github.com/${config.links.github.username}`;
  document.getElementById('youtubeLink').href = config.links.youtube.url;
  document.getElementById('twitterLink').href = `https://twitter.com/${config.links.twitter.username}`;
  document.getElementById('emailLink').href = `mailto:${config.links.email.address}`;

  // Staggered Entrance Animation Logic
  const elementsToAnimate = [
    ...document.querySelectorAll('.link-button'),
    ...document.querySelectorAll('.social-link')
  ];

  elementsToAnimate.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate-in');
    }, 150 * (index + 1)); // Clean staggered timing
  });

  // Simplified Analytics
  if (config.analytics.enabled) {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        const linkLabel = this.querySelector('.link-text')?.textContent || this.getAttribute('aria-label');
        console.log(`Tracking: ${linkLabel}`);
      });
    });
  }
});

function updateConfig(newConfig) {
  Object.keys(newConfig).forEach(key => {
    if (config[key] && typeof config[key] === 'object') {
      Object.assign(config[key], newConfig[key]);
    } else {
      config[key] = newConfig[key];
    }
  });

  document.dispatchEvent(new Event('DOMContentLoaded'));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { config, updateConfig };
}
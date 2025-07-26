// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Toggle Login/Signup Form
const userIcon = document.getElementById('userIcon');
const authForm = document.getElementById('authForm');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

userIcon.addEventListener('click', () => {
    authForm.style.display = authForm.style.display === 'block' ? 'none' : 'block';
});

function showLogin() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

function showSignup() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}

// Login & Signup Form Validation
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Login Successful!');
    authForm.style.display = 'none';
});

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('🎉 Signup Completed Successfully!');
    authForm.style.display = 'none';
});


document.querySelectorAll('.animated-heading').forEach(el => {
    observer.observe(el);
});


 
  const cartModal = document.getElementById("cartFormModal");
  const cartForm = document.getElementById("cartForm");

  // Get all Add to Cart buttons
  const addToCartButtons = document.querySelectorAll(".order-btn , #cartIcon");


  // Attach click listener to each button
  addToCartButtons.forEach(btn => {
    btn.onclick = () => {
      cartModal.style.display = "block";
    };
  });

  function closeCartForm() {
    cartModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == cartModal) {
      closeCartForm();
    }
  }

  cartForm.onsubmit = function(e) {
    e.preventDefault();
    alert("Item added to cart successfully! 🛒");
    closeCartForm();
  };


  document.querySelector(".connect-btn").addEventListener("click", function () {
    const email = document.querySelector(".connect-input").value;
    if (email.trim() === "") {
      alert("Please enter your email to subscribe.");
    } else {
      alert("Subscribed successfully! Check your inbox.");
    }
  });

  document.querySelectorAll(".social-icons i").forEach((icon) => {
    icon.addEventListener("click", () => {
      alert("Redirecting to our social page...");
    });
  });

  document.querySelectorAll(".connect-box").forEach((box, index) => {
    box.style.animationDelay = `${0.4 + index * 0.2}s`;
  });


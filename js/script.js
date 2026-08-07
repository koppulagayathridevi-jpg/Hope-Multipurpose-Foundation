// ============================================
// Hope Multipurpose Foundation
// Main JavaScript File
// ============================================

console.log("Hope Foundation Script Loaded");

// ============================================
// 1. Scroll To Top Button (Optional)
// ============================================

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ============================================
// 2. Gallery Page
// ============================================

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// ============================================
// 3. Volunteer Page
// ============================================


const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {

    volunteerForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const age = document.getElementById("age").value.trim();
        const skills = document.getElementById("skills").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name==="" || email==="" || phone==="" || age==="" || skills==="" || message===""){
            alert("Please fill all fields.");
            return;
        }

        alert("🎉 Thank you for becoming a volunteer!");

        volunteerForm.reset();

    });

}
// ============================================
// 4. Contact Page
// ============================================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const message=document.getElementById("message").value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern=/^[6-9]\d{9}$/;

if(name===""){

alert("Please enter your name");

return;

}

if(!emailPattern.test(email)){

alert("Enter valid email");

return;

}

if(phone!="" && !phonePattern.test(phone)){

alert("Enter valid phone number");

return;

}

if(message.length<10){

alert("Message should be at least 10 characters");

return;

}

alert("✅ Message Sent Successfully!");

contactForm.reset();

});

}

// ============================================
// 5. Donation Page
// ============================================

const donationForm=document.getElementById("donationForm");

if(donationForm){

const amountInput=document.getElementById("amount");

const donateButtons=document.querySelectorAll(".donate-btn");

donateButtons.forEach(button=>{

button.addEventListener("click",()=>{

const amount=button.dataset.amount;

amountInput.value=amount;

amountInput.focus();

window.scrollTo({

top:amountInput.offsetTop-120,

behavior:"smooth"

});

});

});

donationForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const amount=document.getElementById("amount").value.trim();

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""){

alert("Please enter your name");

return;

}

if(!emailPattern.test(email)){

alert("Please enter valid email");

return;

}

if(amount==="" || Number(amount)<=0){

alert("Please enter donation amount");

return;

}

alert("🎉 Thank You " + name + "!\n\nDonation of ₹"+amount+" received successfully.");

donationForm.reset();

});

}

// ============================================
// 6. Counter Animation (Home Page)
// ============================================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

// ============================================
// End
// ============================================

console.log("All JavaScript Loaded Successfully");

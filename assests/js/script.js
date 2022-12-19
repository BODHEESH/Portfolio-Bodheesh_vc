$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio | Bodheesh vc";
        $("#favicon").attr("href","assests/images/bvc2.jpg");
    }
    else {
        document.title = "Come Back To Portfolio";
        
    }
});


// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["MERN stack developer",  "Youtube Content Creator", "Web designer"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->



// Start of Tawk.to Live Chat
    // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    // (function(){
    // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    // s1.async=true;
    // s1.src='https://embed.tawk.to/60f70460649e0a0a5ccd22a7/1fb2ei71o';
    // s1.charset='UTF-8';
    // s1.setAttribute('crossorigin','*');
    // s0.parentNode.insertBefore(s1,s0);
    // })();
// End of Tawk.to Live Chat

 // <!-- emailjs to mail contact form data -->
 $("#submit-form").submit(function (event) {
    //event.preventdefault();
    
    event.preventDefault();
    emailjs.init("scoowbjFbUkXN205y");
    console.log("form submitted");
    emailjs.sendForm('service_sxhkdba', 'template_9fbmhxi', '#submit-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("submit-form").reset();
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });
    
});




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});



async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 


/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 200}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});




// validation




let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('empty_notice');
let msgSuccess = document.getElementById('alert-success');

function validateName(){
    let name = document.getElementById('name').value;
    document.getElementById('name-error').style.color = 'red';
    if (name.length == 0) {
        nameError.innerHTML = 'Name required';
        return false;
    }
	if (name.length < 3) {
        nameError.innerHTML = 'Minimum 3 letters reqired';
        return false;
    }

    if (name.match(' '+' ')) {
        nameError.innerHTML = 'Adjacent spaces are not allowed';
        return false;
    }

	
	
    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'please enter your full name';
        return false;
    }


	
	
	nameError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    document.getElementById('email-error').style.color = 'red';
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    
    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
	if (email == 'vcbodheesh@gmail.com') {
        emailError.innerHTML = 'you can\'t use this email because its mine.';
        return false;
    }


	emailError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validatePhone() {
	let phone = document.getElementById('tel').value;

    document.getElementById('phone-error').style.color = 'red';
	// if(phone === " "){
	// 	phoneError.innerHTML="";
	// 	return false;
	// }
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
	if (phone == 9544677811) {
        phoneError.innerHTML = 'oops..I know its not your mobile number';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
	

	phoneError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 25;
    let left = required - message.length;
    document.getElementById('message-error').style.color = 'red';

    if (left > 0) {
        messageError.innerHTML = left + 'More charector required';
        return false;
    }

   messageError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill Required Fields';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    } else {
        msgSuccess.style.display = 'block';
        msgSuccess.innerHTML = 'This is a success alert—check it out!';
    }

    
}


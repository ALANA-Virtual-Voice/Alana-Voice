

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


document.addEventListener("keydown", function(event) {
    if (event.code === "KeyF" || event.code === "Keyf") {
        var micButton = document.querySelector(".talk");
        micButton.click();
    }
});



document.addEventListener("keydown", function(event) {
    if (event.code === "KeyJ" || event.code === "Keyj") {
        var micButton = document.querySelector(".talk");
        micButton.click();
    }
});




function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}



function wishMe() {
    var day = new Date();
    var hr = day.getHours();



    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }



    else if(hr == 12) {
        speak("Good noon");
    }



    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }


    else {
        speak("Good Evening");
    }
}



window.addEventListener('load', ()=>{
    wishMe();
})



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();



recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}



btn.addEventListener('click', ()=>{
    recognition.start();
})



function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();



    speech.text = "I did not understand what you said please try again";



    if (message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello";
        speech.text = finalText;



    }else if (message.includes('tell me a joke') || message.includes('joke')) {
        const finalText = "What do you call a train carrying bubblegum";
        const finalTextx = " A chew-chew train"
        speech.text = finalText
        speech.text = finalTextx;



    } else if (message.includes('how are you')) {
        const finalText = "I am fine How are you";
        speech.text = finalText;



    } else if (message.includes('fine') || message.includes('good')) {
        const finalText = "it is good to know that you are fine"
        speech.text = finalText;


    } else if (message.includes('explain voice assistant')){
        const finalText = "It's software that carries out everyday tasks via voice command. It's brings AI and machine learning together to recognize our voice and do what we ask it. Voice assistant software can be found on smart speakers, smartwatches, mobile phones, tablets and other devices."
        speech.text = finalText;




    } else if (message.includes('what is your name') || message.includes("what's your name")) {
        const finalText = "My name is alana";
        console.log("My name is alana")
        speech.text = finalText;



    } else if (message.includes('open google') || message.includes("go to google")) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        console.log("Opening Google")
        speech.text = finalText;
        speech.text = finalText;



    } else if (message.includes('open whatsapp') || message.includes("go to whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;



    } else if (message.includes('open facebook') || message.includes("go to facebook")) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;



    } else if (message.includes('open instagram') || message.includes("go to instagram")) {
        window.open("https://instagram.com", "_blank");
        const finalText = "opening instagram"
        speech.text = finalText;



    } else if (message.includes('open insta') || message.includes("go to insta")) {
        window.open("https://instagram.com", "_blank");
        const finalText = "opening instagram"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 1st grade')) {
        window.open("https://www.studyadda.com/notes/1st-class/32", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 2nd grade')) {
        window.open("https://www.studyadda.com/notes/2nd-class/33", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 3rd grade')) {
        window.open("https://www.studyadda.com/notes/3rd-class/34/science/5", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 4th grade')) {
        window.open("https://byjus.com/cbse/class-4/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 5th grade')) {
        window.open("https://byjus.com/cbse/class-5/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 6th grade')) {
        window.open("http://byjus.com/cbse-notes/class-6-science-notes/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 7th grade')) {
        window.open("https://byjus.com/cbse/class-7/", '_blank');
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 8th grade')) {
        window.open("https://byjus.com/cbse/class-8/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 9th grade')) {
        window.open("https://byjus.com/cbse/class-9/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 10th grade')) {
        window.open("https://byjus.com/cbse/class-10/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;


    } else if (message.includes('give me the notes of 11th grade')) {
        window.open("https://byjus.com/cbse/class-11/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of 12th grade')) {
        window.open("https://byjus.com/cbse/class-12/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;


    } else if (message.includes('give me the notes of neet')) {
        window.open("https://byjus.com/neet/neet-notes/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me the notes of j e')) {
        window.open("https://byjus.com/jee/iit-jee-study-material/", "_blank")
        const finalText = "yeah wait a second"
        speech.text = finalText;




    } else if (message.includes('give me a model question paper for grade 1st')) {
        window.open("https://www.studiestoday.com/sample-paper/539/class-i.html", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 2nd')) {
        window.open("https://www.studiestoday.com/sample-paper/540/class-ii.html", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 3rd')) {
        window.open("https://www.studiestoday.com/sample-paper/541/class-iii.html", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 4th')) {
        window.open("https://www.studiestoday.com/sample-paper/542/class-iv.html", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 5th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-5/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 6th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-6/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 7th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-7/", '_blank');
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 8th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-8/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 9th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-9/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 10th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-10/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 11th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-11/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for grade 12th')) {
        window.open("https://byjus.com/cbse-sample-papers-for-class-12/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('give me a model question paper for neet')) {
        window.open("https://byjus.com/neet/neet-sample-papers/", "_blank");
        const finalText = "yeah wait a second"
        speech.text = finalText;


    } else if (message.includes('give me a model question paper for j e')) {
        window.open("https://byjus.com/jee/jee-main-question-paper/", "_blank")
        const finalText = "yeah wait a second"
        speech.text = finalText;



    } else if (message.includes('internet speed test')) {
        window.open("https://www.speedtest.net", "_blank");
        const finalText = "Opening internet speed test";
        speech.text = finalText;



    } else if (message.includes('open stack overflow')) {
        window.open("https://stackoverflow.com", "_blank");
        const finalText = "Opening stack over flow dot happy coding";
        speech.text = finalText;
    }



    else if (message.includes('open amazon')) {
        window.open("http://amazon.com", "_blank");
        const finalText = 'opening amazon'
        speech.text = finalText;
    }

    else if (message.includes('open spotify')) {
        window.open("https://open.spotify.com/artist/0e86yPdC41PGRkLp2Q1Bph", "_blank");
        const finalText = "Opening spotify";
        speech.text = finalText;
    }



    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://searx.fmac.xyz/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;



    } else if (message.includes('youtube')|| message.includes("open youtube")|| message.includes("go to youtube")) {
        window.open(`https://www.youtube.com/results?search_query=${message.replace("youtube", "")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message;
        speech.text = finalText;


    } else if (message.includes('calculate')|| message.includes("add")|| message.includes("multiply")) {
        window.open(`https://www.google.com/search?q=${message.replace("calculate", "")}`, "_blank");
        const finalText = "This is the answer of" + message;
        speech.text = finalText;

    } else if (message.includes('weather')|| message.includes("climate")) {
        window.open(`https://www.google.com/search?q=${message.replace("   ","")}`, "_blank");
        const finalText = "today's" + message;
        speech.text = finalText;


    } else if (message.includes('amazon') || message.includes("go to amazon")|| message.includes("open amazon")){
        window.open(`https://www.amazon.in/s?k=${message.replace("amazon", "")}`, "_blank");
        const finalText = "This is what i found on amazon regarding " + message;
        speech.text = finalText;



    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;



    } else if (message.includes('time') || message.includes('what is the time now')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric" , second: "numeric"})
        const finalText = time;
        speech.text = finalText;



    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {year: "numeric", month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;



    } else if (message.includes('open calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;



    } else if (message.includes('who created you')) {
        const finalText = "I have been create by Rahul Sanjiv and Shrivanth";
        speech.text = finalText;



    } else if (message.includes('open gaana')) {
        window.open("https://gaana.com", "_blank");
        const finalText = "Opening gaana";
        speech.text = finalText;



    } else if (message.includes('why you are here')) {
        const finalText = "I am here because of Rahul sanjiv and shrivanth and other all secret";
        speech.text = finalText;




    } else if (message.includes('open the presentation')) {
        window.open('C:\\Users\\WELCOME\\Desktop\\27.11.2022\\ppt.pptx')
        const finalText = "Opening the presentation"
        speech.text = finalText;



    } else if (message.includes('open flipkart') || (message.includes('open flip kart'))) {
        window.open('http://flipkart.com')
        const finalText = "opening flipcart"
        speech.text = finalText;



    } else {
        window.open(`https://searx.fmac.xyz/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message;
        speech.text = finalText;
    }




    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}


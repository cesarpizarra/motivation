const btn = document.getElementById("btn");
const message = document.getElementById("message");

const motivation = [
    "When you have a dream, you've got to grab it and never let go",
    "Nothing is impossible. The word itself says 'I'm possible!",
    "There is nothing impossible to they who will try.",
    "The bad news is time flies. The good news is you're the pilot.",
    "Life has got all those twists and turns. You've got to hold on tight and off you go",
    "Try and try until you succeed",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You define your own life. Don't let other people write your script.",
    "You are never too old to set another goal or to dream a new dream.",
    "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "Spread love everywhere you go.",
    "You can be everything. You can be the infinite amount of things that people are.",
    "Belief creates the actual fact.",
    "It is during our darkest moments that we must focus to see the light.",
    "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    "Silence is the last thing the world will ever hear from me.",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    "Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely."
];

const newMotivation = ()=> {
    return Math.floor(Math.random() * motivation.length);
};
btn.addEventListener("click", ()=> {
    const count = newMotivation();
    message.textContent= motivation[count];
});
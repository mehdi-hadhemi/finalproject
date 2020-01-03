import uuid from 'uuid'

let initialstate=[{
    image:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84633761%2F173763014903%2F1%2Foriginal.20191215-214632?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C66%2C1280%2C640&s=4b4493975adec438f8ead4236030191d",
    title:"L'Intelligence verbale - Communiquer , faire agir & influencer",
    date:"dim. 5 janvier 2020 09:00 – 14:00 heure ",
    adresse:"Les Berges du Lac Tunis, Tunis",
    description:"Description<br/>Nous sommes fier de vous annoncer le Lancement de notre 9eme session de formation en intelligence verbale à TUNIS avec plus de 200 participants depuis Avril 2019 entre Tunis , Sousse et Bizerte.<br/>NLP BOOST Tunisie vous propose de développer cette intelligence, maîtriser vos mots et en ressentir le pouvoir sur vous-même et sur les autres à travers des notions théoriques , un savoir développé et simplifié pour vous , accompagné de pratique , de document de référence et d'un accompagnement de proximité .<br/>La base de notre communication, de notre influence sur les autres, de nos réalisations en chiffre d’affaire, de notre capacité à gérer les conflits, le pilier de l'écoute active, du recadrage et du questionnement n'est autre que l'intelligence verbale.A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia. 25 years later, he sets out to find his lost family. In 1986, Saroo was a five-year-old child in India of a poor but happy rural family.",
    id:uuid()
    
  },
  {
    image:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F79043845%2F235907250653%2F1%2Foriginal.20191101-142443?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C30%2C960%2C480&s=c3dd21491306f9c6569274e3fa4f3085",
    title:"New Years Eve at Mansion Antwerp",
    date:'31 dec. 2019, 23:00',
    adresse:"New york",
    description:"♛♛♛♛ MANSION ANTWERP ♛♛♛♛♛<br/>Proudly Presents:♛♛♛♛♛ NEW YEAR'S EVE ♛♛♛♛<br/>Let's end this year in style.Come and party with us at the biggest and most unbelievable NYE Party in A-town...Expect Dancers, Acrobats, Fireworks, and a lot more...Follow us on instagram: @Mansion_Antwerp Music on this special occasion will be brought to you by:<br/>- Nick Dillinger<br/>- FUNKTASTIX<br/>- DJ OH-G<br/>- DJ XO<br/>- DJ Joran<br/>Dresscode: Casual chique<br/>DOOR: 30 EUR<br/>VIP: jimmy@blueflame.be<br/>whatsapp : +32 479.54.12.97<br/>DOORS OPEN AT 23.00<br/>MANSION ♥ YOU!!!!!!!!",
    id:uuid()
  },
  {
    image:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82959211%2F310161865775%2F1%2Foriginal.20191124-030515?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C3332%2C1666&s=205b4cf466924979b80c6eb66e42647f",
    title:"Digital Transformation Training in Paris | Introduction to Digital Transfor...",
    date:"Tue, December 31, 2019 2:30 AM – 4:30 AM CET",
    adresse:"Paris",
    description:"Description Digital Transformation training is a LIVE Instructor-led training delivered from December 30, 2019 - January 23, 2020 for 16 hours over 4 weeks, 8 sessions, 2 sessions per week, 2 hours per session.<br/>WEEKLY SCHEDULE<br/>4 weeks | Monday, Thursday every week5:30 - 7:30 PM US Pacific time each day December 30, 2019 - January 23, 2020 US Pacific time Please check your local date and time for first session<br/>FEATURES AND BENEFITS4 weeks, 8 sessions, 16 hours of total Instructor led LIVE trainingTraining material, instructor handouts and access to useful resources on the cloud provided Real-life Scenarios<br/>COURSE OVERVIEW Digital Transformation is everywhere around us. We are increasingly using smartphones for communicating with friends, read news on subway screens or hail a ride via mobile apps. How does this impact our work and life? Digital Transformation may seem challenging, but it is also creating abundant new career opportunities and business growth potential. Discover how to deal with this change and take advantage of the opportunities in this digital era.",
    id:uuid()
  }]
  const EventReducer =(state=initialstate,action) => {
    switch (action.type){
       
     default:
                  return state
    }
}
export default EventReducer
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-leadership-full-details',
  templateUrl: './leadership-full-details.component.html',
  styleUrls: ['./leadership-full-details.component.scss']
})
export class LeadershipFullDetailsComponent implements OnInit {
  leadershipList = [
    {
      id:1,
      image: "../../../../assets/images/about-us/leadership/Head of centre.jpg",
      title: "Head of Center",
      name: "AYESHA BAIG",
      description: [
        "Ayesha is a gifted Preschool Educationist with 25 years of rich experience in this field. She endeavors to create passionate early childhood teachers who facilitate a transformational positive impact on young minds.",
        "Before Indus Altum Early Centre, Ayesha has worked for leading Preschools and Schools in Mumbai, Gujarat & Goa in different capacities. As a teacher trainer, she headed a leading teacher training institute in Mumbai and was an adjunct faculty at Asian International College, Singapore’s Indian venture. As part of the Early Childhood Association (ECA), she has conducted several training programs, seminars, and workshops for Heads, Principals, School Teachers, Anganwadi Teachers & NGOs. Presently, she heads the Karnataka Territory of the association.",
        "Ayesha has a Master’s Degree in Education & Education Management. She has completed her International Certificate in Education – Preschool Teaching (ICEPT) from Asian International College (AIC), Singapore, and also has a Diploma in Early Childhood Care and Education (ECCE) from Mumbai University.",
      ]
    },
    {
      id:2,
      image: "../../../../assets/images/about-us/leadership/SarojiniRao.jpg",
      title: "Principal- Indus Altum International School, Belgaum",
      name: "Dr. Praseedha Sreekumar",
      description: [
        "Dr.Praseedha Sreekumar is the Founder Principal of Indus Altum International School, Belgaum. She is an educator who believes in an educational standard capable of breaking barriers and stereotypes of differentiation concerning race, caste, religion, gender, and society to create global citizens in the real sense. She strongly believes that open-mindedness is one of the more productive outcomes of International Education. She has, over 19 years of experience with various curriculums which include - national and international, which she refers to as '19 years of learning'. Having completed her Doctorate in Indo-Anglian Literature, she has acquired a great passion and spirit for teaching English Language and Literature.",

        "Dr.Sreekumar is an examiner for IB - TOK and IB - English Literature and has been selected as a Cambridge Trainer for IGCSE First Language English by Cambridge International, UK in 2017. She has served Indus International School, Pune as the Head of English Department and IBDP Co-ordinator before being the Principal of a Cambridge school in Tamil Nadu. She has undertaken both academic and administrative roles in various international schools in India and abroad. Her vibrant and versatile educational and administrative experiences with International Curriculum have helped her with various pedagogical policy formulations.",

      ]
    },
    {
      id:3,
      image: "../../../../assets/images/home/ceo.jpg",
      title: "FROM THE CEO/ MD'S DESK",
      name: "LT. GENERAL ARJUN RAY, PVSM, VSM (RETD.)",
      description: [
        "A soldier-scholar of the Indian Army, Lt. General Arjun Ray, PVSM, VSM (Retd.) has wide-ranging experience in matters of defence and conflict management, but he also has a deep-rooted passion for social transformation. He is the CEO/MD of the Indus Trust and provides vision and strategic direction to all Indus International Schools and Institutions. He is responsible for long-term perspective planning, leadership training, teacher development programmes, innovation in education, aligning parents, children, and community, and implementing the Trust's social responsibilities. Under his leadership, Indus International became a premier institution, and one of the top international schools in Belagavi.",
        "He is a graduate of the prestigious Staff College at Camberley, UK, and served as the country's Deputy Military Advisor in London. On his last assignment, he commanded the newly raised 14 Corps in Ladakh. His success in forestalling insurgency in the region, by winning over alienated communities into the nation's mainstream, has been nationally and internationally acclaimed. Before building one of the top boarding schools in India, as a part of Operation Sadbhavana (Goodwill), he set up 13 schools, 11 Women's Empowerment Centers, and 60 Adult Education Centers for non-literate women along the Line of Control in Jammu and Kashmir. He provided free education and pastoral care to 125 Ladakhi girls in Belagavi colleges.",
        "In recognition of his services in nation-building, he was awarded the Param Vashist Seva Medal, the highest honour in the armed forces for distinguished service. His success story in ‘change leadership’ has been selected as a case study for business and management schools in India. A dynamic leader, his imminent foresight and intellect, led him to mould Indus into a stellar educational institution and a top ranked international school in Belagavi.",
        "In his second calling – international school education – he is of the firm belief that the purpose of education in the 21st century is to prepare the child for life; and that teachers must facilitating a nurturing environment, to unravel the potential in every child. Especially in residential schools in India, which is essentially a home away from home.",
        "He deemed this possible, by instilling in teachers and child with core leadership competencies, such as innovation, persuasive communication, critical thinking, grit and more which equips them to design their own future in a VUCA world (Volatile, Uncertain, Complex, and Ambiguous), vision that sets the bar amongst the top International Schools in India. Consequently, equipping them to design their own future in a VUCA world (Volatile, Uncertain, Complex, and Ambiguous). A vision that sets the bar amongst the top International Schools in India.",
        "Under his leadership, thirteen institutions including the three IB Schools, Indus Altum International School affiliated to Cambridge Assessment International Education (CAIE), the School of Leadership, the Indus Training and Research Institute, Start-up you school, Five Early Learning Centres, and the International Community School, which is the world’s first equal opportunity school have been set up.",
        "IB World has recently acknowledged General Ray to be one of the six IB World School Leaders for rethinking education and making high-quality education affordable to the underprivileged. Education World has named him one of the 50 game-changers in the education scenario in India. Furthermore, he was recently awarded the White Swan Education Award for India’s Most Influential Leader 2015-2016 in India. With his radical vision, Indus International has become an example for schools in Belagavi, and throughout the country.",
        "General Ray also won the Brainfeed Lifetime Achievement Award (2017-18) for his outstanding contribution to the field of education by elevating standards in imparting quality education to the next generation learners.",
        "The General has three interests – reading, writing, and speaking on leadership. His first book, Kashmir Dairy:The Psychology of Military, is a purple primer in understanding the mind and motivation of a terrorist. The second book, Peace Is Everybody’s Business: Strategy for Conflict Prevention, is a treatise in conflict-prevention and has just been published by SAGE Publications. This book was inspired by General Ray’s experience in bringing lasting peace in Ladakh.",
        "Lt. General Arjun Ray has been awarded the Education Today Life Time Achievement Award 2018 for his incredible contribution in the field of education. He is an exemplary learner, teacher and leader with a vision and strategies to bring innovation in education."
      ]
    },
    {
      id:4,
      image: "../../../../assets/images/about-us/leadership/trustee 1.jpg",
      title: "Chairperson- School Board, Altum Trust",
      name: "Mai Melligeri",
      description: [
        "Mai Melligeri is the Chairperson of the School Board, Altum Trust. With her vision to improve access to quality education, her relentless focus on bringing in global education standards and effective decision-making forms the foundation of Indus Altum International School.",

        "She is also the Chairperson of the Aequs Foundation, directing the CSR and philanthropy programs of Aequs. Under her aegis, Aequs Foundation has initiated multiple social impact programs to provide better education, health, and hygiene to the underprivileged children of various schools in and around Belagavi. ",
        "Mai is a permanent trustee of the Hindu temple in Woodlands, Texas. She is also serving as a Member of the Advisory board of Pratham, Houston, since 2016.",
        "She holds a Bachelor’s degree in Computer Science from the KLE College of Engineering."
      ]
    },
    {
      id:5,
      image: "../../../../assets/images/about-us/leadership/trustee 2.jpg",
      title: "Member - School Board, Altum Trust",
      name: "Aravind Melligeri",
      description: [
        "Aravind Melligeri is a member of the School Board, Altum Trust. His entrepreneurial experience and exceptional foresight add value to the strategy, overall performance, and success of Indus Altum International School.",

        "He is also the Chairman and CEO of Aequs Inc. Aravind's vision of creating a global ecosystem, driving scale, and efficiency have become a glorious reality today, through organic growth, collaborations, partnerships, acquisitions, and the spirit of innovation in all endeavors. His acumen and continued guidance have helped realize Aequs' vision, values, and vitality.",
        "Aravind is a Board member of QuEST Global, a company he co-founded in 1997. He is also the Chairperson of the ground-breaking toy cluster in Koppal under the Government of Karnataka's, Vision Group project.",
        "He holds a bachelor's degree in Mechanical Engineering from the National Institute of Technology, Karnataka, and a master's degree in Mechanical Engineering from Pennsylvania State University. Aravind has been the recipient of the 'Young Achiever Award by the Indo- American Community and the 'Super Entrepreneur 2019' award by The Machinist (India) magazine."

      ]
    },
    {
      id:6,
      image: "../../../../assets/images/about-us/leadership/trustee 3.jpg",
      title: "Member - School Board, Altum Trust",
      name: "Rajeev Kaul",
      description: [
        "Rajeev Kaul is a member of the School Board, Altum Trust. He brings with him a wealth of experience spanning nearly three decades. His strategic and management expertise helps steer the Indus Altum International School towards setting the gold standard in providing international quality of education and enhance the efficacy of its operations.",

        "He is the Managing Director and CEO of Aequs Aerospace and has been instrumental in setting up the country's first aerospace manufacturing ecosystem in Belagavi, Karnataka. Rajeev's exceptional commitment and dedication towards driving business growth and expansion globally have taken Aequs from strength to strength.",
        "Before joining Aequs, he worked with QuEST Global, providing support and guidance to operational leadership on financial matters.",
        "He holds a bachelor's degree in Mathematics from Delhi University and is a qualified Chartered Accountant.",
      ]
    },

  ]
  selectedData: any;
  constructor(public dialogRef: MatDialogRef<LeadershipFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    let index  = this.leadershipList.findIndex(x => x.id === this.data);
    this.selectedData = this.leadershipList[index];
    console.log(this.selectedData);
  }

}

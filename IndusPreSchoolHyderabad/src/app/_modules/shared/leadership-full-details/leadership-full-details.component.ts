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
      id: 1,
      image: "../../../../assets/images/about-us/leadership/Head of centre.jpg",
      title: "Head of Center",
      name: "MS. KIRAN KAZA",
      description: [
        "Ms Kiran is a graduate in science, with specialization in areas of ‘Child development’, Methods of Early Childhood Education and child care. She has been associated with Pre schools for over 24 years, and was involved in teaching, administration and teacher training, and was recognized for her teaching proficiency. She played a vital role in extending support to children and parents, in imparting quality services in the field of pre- primary education. She believes that children are the future, and that their primary education plays a major role in moulding and preparing them to take on the hurdles they will face. Therefore, the principles that she has incorporated into her work, are in accordance with this belief."
      ]
    },
    {
      id: 2,
      image: "../../../../assets/images/about-us/leadership/Farida.jpg",
      title: "Principal of Indus International School, Hyderabad",
      name: "MS. FARIDA FRAZ",
      description: [
        "Ms Farida Fraz has been associated with Indus for over six years. She has served in the field of education for more than eleven years with the sole aim to pursue her call in transforming education. A qualified engineer, has done a brief stint, working in the IT services as a Quality Assurance engineer. Her experience also includes teaching AS and A level Mathematics to students in Riyadh, Saudi Arabia. ",
        "At Indus, she has served in various capacities. From being the Mathematics facilitator for IGCSE, MYP and DP, Head of the department for Mathematics, DP Associate Coordinator to the last position being that of a DP Coordinator. ",
        "Ms Farida is also an IB examiner for Math AA HL Paper 3 and Mathematics Internal Assessment. She prides herself on being meticulous and able to do good energy management. She enjoys the company of children and connects with students of all ages extremely well. ",
        "She believes that the purpose of education at Indus is focused on social, academic, cultural and intellectual development. This aids in ensuring that the students grow up to be more engaged citizens. She has a strong vision of commitment to high standards and with that, would like to achieve success for all her students."

      ]
    },
    {
      id: 3,
      image: "../../../../assets/images/home/ceo.jpg",
      title: "FROM THE CEO/ MD'S DESK",
      name: "LT. GENERAL ARJUN RAY, PVSM, VSM (RETD.)",
      description: [
        "A soldier-scholar of the Indian Army, Lt. General Arjun Ray, PVSM, VSM (Retd.) has wide-ranging experience in matters of defence and conflict management, but he also has a deep-rooted passion for social transformation. He is the CEO/MD of the Indus Trust and provides vision and strategic direction to all Indus International Schools and Institutions. He is responsible for long-term perspective planning, leadership training, teacher development programmes, innovation in education, aligning parents, children, and community, and implementing the Trust's social responsibilities. Under his leadership, Indus International became a premier institution, and one of the top international schools in Bangalore.",
        "He is a graduate of the prestigious Staff College at Camberley, UK, and served as the country's Deputy Military Advisor in London. On his last assignment, he commanded the newly raised 14 Corps in Ladakh. His success in forestalling insurgency in the region, by winning over alienated communities into the nation's mainstream, has been nationally and internationally acclaimed. Before building one of the top boarding schools in India, as a part of Operation Sadbhavana (Goodwill), he set up 13 schools, 11 Women's Empowerment Centers, and 60 Adult Education Centers for non-literate women along the Line of Control in Jammu and Kashmir. He provided free education and pastoral care to 125 Ladakhi girls in Bangalore colleges.",
        "In recognition of his services in nation-building, he was awarded the Param Vashist Seva Medal, the highest honour in the armed forces for distinguished service. His success story in ‘change leadership’ has been selected as a case study for business and management schools in India. A dynamic leader, his imminent foresight and intellect, led him to mould Indus into a stellar educational institution and a top ranked international school in Bangalore.",
        "In his second calling – international school education – he is of the firm belief that the purpose of education in the 21st century is to prepare the child for life; and that teachers must facilitating a nurturing environment, to unravel the potential in every child. Especially in residential schools in India, which is essentially a home away from home.",
        "He deemed this possible, by instilling in teachers and child with core leadership competencies, such as innovation, persuasive communication, critical thinking, grit and more which equips them to design their own future in a VUCA world (Volatile, Uncertain, Complex, and Ambiguous), vision that sets the bar amongst the top International Schools in India. Consequently, equipping them to design their own future in a VUCA world (Volatile, Uncertain, Complex, and Ambiguous). A vision that sets the bar amongst the top International Schools in India.",
        "Under his leadership, thirteen institutions including the three IB Schools, Indus Altum International School affiliated to Cambridge Assessment International Education (CAIE), the School of Leadership, the Indus Training and Research Institute, Start-up you school, Five Early Learning Centres, and the International Community School, which is the world’s first equal opportunity school have been set up.",
        "IB World has recently acknowledged General Ray to be one of the six IB World School Leaders for rethinking education and making high-quality education affordable to the underprivileged. Education World has named him one of the 50 game-changers in the education scenario in India. Furthermore, he was recently awarded the White Swan Education Award for India’s Most Influential Leader 2015-2016 in India. With his radical vision, Indus International has become an example for schools in Bangalore, and throughout the country.",
        "General Ray also won the Brainfeed Lifetime Achievement Award (2017-18) for his outstanding contribution to the field of education by elevating standards in imparting quality education to the next generation learners.",
        "The General has three interests – reading, writing, and speaking on leadership. His first book, Kashmir Dairy:The Psychology of Military, is a purple primer in understanding the mind and motivation of a terrorist. The second book, Peace Is Everybody’s Business: Strategy for Conflict Prevention, is a treatise in conflict-prevention and has just been published by SAGE Publications. This book was inspired by General Ray’s experience in bringing lasting peace in Ladakh.",
        "Lt. General Arjun Ray has been awarded the Education Today Life Time Achievement Award 2018 for his incredible contribution in the field of education. He is an exemplary learner, teacher and leader with a vision and strategies to bring innovation in education."
      ]
    },
    {
      id: 4,
      image: "../../../../assets/images/about-us/leadership/trustee 1.jpg",
      title: "Trustee",
      name: "Mr. H.B. Jairaj",
      description: [
        "Mr. H B Jairaj, the Chairman of HRB Group of companies, has an MBA (Finance) from Case Western Reserve University, USA, and is a prominent industrialist from Karnataka. Mr. Jairaj has guided his group of organizations into successful ventures across diverse enterprises. His group’s various interests include real estate, hotels/serviced apartments, restaurants, and healthcare facilities. He also serves as a mentor and advisor to many aspiring entrepreneurs. He instills in them, a commitment to excellence while sharing his wealth of knowledge and experience.",
        "He is an active member and trustee of many prestigious associations, including the Karnataka State Cricket Association, the Hyderabad Turf Club, and the Indian Red Cross Society. At Indus, he is at the helm of strategic and financial planning, paving our way up on the list of best schools in Hyderabad. "
      ]
    },
    {
      id: 5,
      image: "../../../../assets/images/about-us/leadership/trustee 2.jpg",
      title: "Trustee",
      name: "Dr. Kumar Malavalli",
      description: [
        "Kumar Malavalli is an entrepreneur, renowned philanthropist and visionary in the field of storage networks. He is the co-author and driving force behind Fibre Channel, an evolutionary technology that enabled the development of production-class Storage Area Networks (SAN’s). He is also the Co-founder and former CTO of Brocade Communications; Co-founder, Chairman and CSO of InMage Systems; and the CSO of LeadFormix.",
        "In February 2003, he was inducted into the Silicon Valley Engineering Council’s Hall of Fame for his significant contributions towards technology. Kumar’s philanthropy in the field of education extends from digital learning centers in rural India to American institutions for higher education. He also established the 'Kumar Malavalli Endowed Chair' in Storage Systems Research at the University of California, Santa Cruz and co-founded Indus Scholastic Management Services. Furthermore, he also serves as a trustee to Indus International Schools. His contributions towards promoting the Entrepreneurship Curriculum and Wellness philosophy of the school are rather significant and make Indus one of the top international schools in Hyderabad. "
      ]
    },
    {
      id: 6,
      image: "../../../../assets/images/about-us/leadership/trustee 3.jpg",
      title: "Trustee",
      name: "Professor Shivram Malavalli",
      description: [
        "He is currently the Chairman of Indian Institute of Production Engineers, Senior Advisor at World Association of Small & Medium Enterprises and General Secretary of the Indian Science and Technology Entrepreneurs Parks Association. Professor Shivram Malavalli guides all the ICT and Telecommunication initiatives at Indus, shaping it into one of the best international schools in Hyderabad, with remarkable technological capability.",
        "He was honoured in China for his contribution towards the growth of small & medium enterprises – both in India and abroad, by the World Association of Small & Medium Enterprises (WASME) in China. "
      ]
    },
    {
      id: 7,
      image: "../../../../assets/images/about-us/leadership/trustee 4.jpg",
      title: "Trustee",
      name: "Mr. Sushil Mantri",
      description: [
        "Mr. Sushil Mantri, the Chairman & Managing Director of Mantri Developers Pvt. Ltd, is an outstanding personality in the world of realty, housing and construction. He is a visionary with an astute and resolute sense of enterprise, who has transitioned from being an entrepreneur to an industry trendsetter. As the sole leader of his enterprise, Mr. Mantri motivates and advises his committed team on all matters concerning governance, infrastructure, business development & budgeting.",
        "His social initiatives reach out to schools in India, especially those that cater to less privileged. His initiatives also include improving aesthetics of public properties. "
      ]
    },
  ]
  selectedData: any;
  constructor(public dialogRef: MatDialogRef<LeadershipFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    let index = this.leadershipList.findIndex(x => x.id === this.data);
    this.selectedData = this.leadershipList[index];
    console.log(this.selectedData);
  }

}
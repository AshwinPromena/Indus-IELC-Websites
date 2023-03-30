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
      image: "../../../assets/images/about-us/leadership/Head-of-centre.jpg",
      title: "Head of Center",
      name: "SONALI MALHOTRA",
      description: [
        "Sonali Malhotra earned a Masters of Education (International) degree with honours from Birmingham City University, United Kingdom. In addition, she is acknowledged as a research scholar and publishes scholarly articles in British Journals. She graduated from Delhi University with a degree in liberal arts, and The Teacher Foundation recognised her achievement on the Cambridge International Diploma in Teaching and Learning.",
        "She has extensive experience with play-based learning, and her time spent in Helsinki visiting Finnish schools overseas helped her better comprehend this all-encompassing educational approach. She holds a certification in image consulting from the Bangalore-based Image Consultant Business Institute.",
        "Her pedagogical portfolio also includes certified international Baccalaureate workshops that make her a critically reflective Early Years’ practitioner. Her philosophy that all children can learn supports the agentic approach. Sonali Malhotra, contends that the greatest approach to unlock a child's potential is through genuine collaboration and partnership between the school, parents, and students. Having stated that, it is equally important to pursue excellence, be a lifelong learner, and be receptive to the power of feedback."
      ]
    },
    {
      id:2,
      image: "../../../../assets/images/about-us/leadership/SarojiniRao.jpg",
      title: "Principal of Indus International School, Bangalore",
      name: "MRS. SAROJINI RAO",
      description: [
        "Mrs. Sarojini Rao, Principal of Indus International School, Bangalore since July 2005, has exceptional academic credentials. She ranked first at the University of Pune in B.A Economics and holds three postgraduate degrees – Economics, Education and Business Administration from the University of Edinburgh.",
        "Trained in all the three IB programs (PYP, MYP, and DP), Mrs. Rao is also a graduate of the Principal’s Training Centre for International School Leadership, USA.",
        "She is the Managing Trustee of Indus International Community School, Bangalore, one of India’s best international schools that offer quality education to the underprivileged.",
        "Mrs. Rao has been instrumental in planning the curriculum and inter-curricular strategy, defining academic and non-academic objectives for the school, and in training teachers. She has played a pivotal role in making Indus the yardstick for residential schools in India. Her role includes formulating the Leadership Curriculum, the Instructional Supervision and Evaluation model for the school. With specialized knowledge of the Balanced Scorecard, she has implemented standards that set challenging and exacting benchmarks, which have rendered the all-around success of Indus as a top international school, in delivering holistic education with academic rigor as the highest priority.",
        "Under her leadership, students are geared up to take on the challenges that lay ahead as flagbearers and makers of the future. Her emphasis on holistic education (without compromising academic excellence) has been the highlight of her conviction and has resulted in Indus being ranked the best international school in India for five successive years.",
        "The structured leadership curriculum that involves every child has instilled confidence among students and has enabled them to set realistic goals and devise plans to achieve them.",
        "Mrs. Rao represents the core values of the school; love, empathy, discipline, and respect. This reflects in our students being sensitized to the needs of the less privileged in society, and their vigour to contribute through service. With her example, guidance, advice and ideas, Mrs. Sarojini Rao has built a strong team, and together they work to maintain the standards of the best Indian international school, bringing recognition and acclamation to Indus every day. Both, teachers and student leaders are committed to excelling in many fields of endeavour for themselves and the students which translates to passion and purpose, service and spirituality, respect for diversity and global understanding."
      ]
    },
    {
      id:3,
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
        
      ]
    },
    {
      id:4,
      image: "../../../../assets/images/about-us/leadership/trustee 1.jpg",
      title: "Trustee",
      name: "Mr. H.B. Jairaj",
      description: [
        "Mr. H B Jairaj, the Chairman of HRB Group of companies, has an MBA (Finance) from Case Western Reserve University, USA, and is a prominent industrialist from Karnataka. Mr. Jairaj has guided his group of organizations into successful ventures across diverse enterprises. His group’s various interests include real estate, hotels/serviced apartments, restaurants, and healthcare facilities. He also serves as a mentor and advisor to many aspiring entrepreneurs. He instills in them, a commitment to excellence while sharing his wealth of knowledge and experience.",
        "He is an active member and trustee of many prestigious associations, including the Karnataka State Cricket Association, the Bangalore Turf Club, and the Indian Red Cross Society. At Indus, he is at the helm of strategic and financial planning, paving our way up on the list of best schools in Bangalore. "
      ]
    },   
    {
      id:5,
      image: "../../../../assets/images/about-us/leadership/trustee 2.jpg",
      title: "Trustee",
      name: "Dr. Kumar Malavalli",
      description: [
        "Kumar Malavalli is an entrepreneur, renowned philanthropist and visionary in the field of storage networks. He is the co-author and driving force behind Fibre Channel, an evolutionary technology that enabled the development of production-class Storage Area Networks (SAN’s). He is also the Co-founder and former CTO of Brocade Communications; Co-founder, Chairman and CSO of InMage Systems; and the CSO of LeadFormix.",
        "In February 2003, he was inducted into the Silicon Valley Engineering Council’s Hall of Fame for his significant contributions towards technology. Kumar’s philanthropy in the field of education extends from digital learning centers in rural India to American institutions for higher education. He also established the 'Kumar Malavalli Endowed Chair' in Storage Systems Research at the University of California, Santa Cruz and co-founded Indus Scholastic Management Services. Furthermore, he also serves as a trustee to Indus International Schools. His contributions towards promoting the Entrepreneurship Curriculum and Wellness philosophy of the school are rather significant and make Indus one of the top international schools in Bangalore. "
      ]
    },
    {
      id:6,
      image: "../../../../assets/images/about-us/leadership/trustee 3.jpg",
      title: "Trustee",
      name: "Professor Shivram Malavalli",
      description: [
        "He is currently the Chairman of Indian Institute of Production Engineers, Senior Advisor at World Association of Small & Medium Enterprises and General Secretary of the Indian Science and Technology Entrepreneurs Parks Association. Professor Shivram Malavalli guides all the ICT and Telecommunication initiatives at Indus, shaping it into one of the best international schools in Bangalore, with remarkable technological capability.",
        "He was honoured in China for his contribution towards the growth of small & medium enterprises – both in India and abroad, by the World Association of Small & Medium Enterprises (WASME) in China. "
      ]
    },
    {
      id:7,
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
    let index  = this.leadershipList.findIndex(x => x.id === this.data);
    this.selectedData = this.leadershipList[index];
    console.log(this.selectedData);
  }

}

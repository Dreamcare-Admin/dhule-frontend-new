import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

import Link from "next/link";
// import StickyAction from "@/components/StickyAction";
import { FaCloudDownloadAlt } from "react-icons/fa";

const faqs = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [faqData] = useState({
    "FAQ's - Arms Licence": [
      {
        question: "How does one procure a new Arms License?",
        answer: "By submitting an application in form 'A' with Rs. 10/- Court fees stamp."
      },
      {
        question: "How much time does it take to get a new Arms License?",
        answer: "About 2 months after the application is submitted (provided all the documents are in order)."
      },
      {
        question: "What is the procedure to procure a New Arms License?",
        answer: "The application form is available in the Pimpri Chinchwad Police Commissionerate or can be downloaded from this site. Submit it with relevant documents to the office of the Police Commissioner Pimpri Chinchwad. After that, the concerned Police station makes an enquiry and submits the report to the Zonal DCP in Commissionerate and SPs in districts. The applicants are then interviewed by the DCP or DM (as the case may be). Once convinced, the licensing authority (CP or DM) issues the license."
      },
      {
        question: "Which documents are needed for obtaining a new Arms License?",
        answer: `1. Copy of Ration card
        2. Election card
        3. Last 3 year's I.T. Returns / challan copy / assessment orders
        4. Two character certificates from responsible citizens from your locality
        5. Physical fitness certificate
        6. Proof of Educational Qualifications (self-attested copies of certificates. Original should not be submitted along with the application).
        7. Proof of age (Birth Certificate/school leaving certificate)
        8. Supporting documents to justify the need for holding the arm for security or for sports, etc.
        9. Proof of address - Light Bill, Ration Card, Index-II, Property Tax Bill, Rent agreement.
        10. If Businessman, submit Business Registration Certificate/Shop Act/Other document of Business information.`
      },
      {
        question: "How is an Arms License renewed?",
        answer: "Licensee should fill in the renewal form and affix Rs. 5/- Court fees stamp thereupon. The licensee should produce the weapon and license for inspection at the time of renewal and pay the renewal fees. Renewal will be done after inquiry from the concerned police station, and the necessary noting about renewal will be made in the license."
      },
      {
        question: "My license has expired three months back. What should I do?",
        answer: "Fill up the renewal form, produce the weapon for inspection along with the license. You have to pay a late fee of Rs.2000/- along with the renewal fee and thereafter, the license will be renewed on satisfaction of the issuing authority about the delay."
      },

      {
        question: "License holder was out of station and hence could not renew the license in time. What is the remedy?",
        answer: `1. Deposit the weapon at the nearest Police station
        2. Obtain receipt for the same
        3. Fill up the renewal form as an agent of the license holder and submit the same.
        4. When the license holder returns, direct him to the office of licensing authority for renewal of his arms license, as explained above.`
      },
      {
        question: "How should I obtain a T.J.P. (Temporary Journey Permit)?",
        answer: `1. Submit an application as per the format (TJP - Temporary Journey Permit) with Rs. 5/- Court Fees Stamp.
2. Attach a copy of the license.
3. Next day, pay a fee of Rs. 500/- for one weapon. If approved, your TJP will be issued on the next day.
4. TJP is only valid for 30 days and is subject to local restrictions imposed by the local authority`
      },
      {
        question: "How do I get a license for property protection (Per-Pro Basis)?",
        answer: "License for property protection is granted on Per-Pro basis. The procedure is same as that of obtaining a new license."
      },
      {
        question: "My father/uncle/husband/ relative was a license holder. He expired and now the license or the weapon is in my possession. What should I do ?",
        answer: `1. You have to deposit the weapon and the original license (with ammunition) for safe custody at the nearest police station. A safe custody receipt will be issued to you.
2. If you want to retain the weapon, submit your application for a new arms license in form A
3. Attach copy of death certificate with application.
4. The weapon can be kept in safe custody for one year. Charges for safe custody are @ Rs.50/- for per year.
5. Procedure for issuing a new license is same as explained above.
6. Please remember that grant of new license depends on your eligibility.
`},
      {
        question: "My father/relative is old. He wishes to give me his weapon. What is the procedure?",
        answer: `1. Make an application for arms license in form A.
2. Attach a consent letter of the license holder with an affidavit on Rs. 500/- stamp paper.
3. Attach NOC from all legal heirs on a Rs.500/- stamp paper, duly notarized.
4. The remaining procedure is same as for procuring a new license.
5. Please remember, grant of license depends upon your eligibility, and not on the wishes of donor.
`},
      {
        question: "My All India Arms License was issued in another State. I want it to be registered/renewed in Maharashtra. What should I do?",
        answer: `1. Submit an application in prescribed form for re-registration to the licensing authority (C.P./D.M.).
2. Attach a copy of the arms license.
3. Attach residential proof.
4. NOC from the original licensing authority should also be attached. This NOC produced by the applicant is liable for a recheck from the concerned authorities directly.
5. A Police station report with remarks from the Zonal DCP/SP should also be attached. On receiving the NOC and remarks, decision shall be taken by the licensing authority about re-registration.
`},
      {
        question: "I want to make my license issued for one city, valid in the whole of Maharashtra. What is the procedure?",
        answer: `1. Make an application, explaining the reasons for your request, on a plain paper with Rs.5/- court fees stamp; to the licensing authority.
2. Attach a copy of Arms license.
3. The application will be sent to the police station (having jurisdiction over the area of your place of residence) for enquiry.
4. On receipt of Police station report, you will be called for an interview.
5. The decision will be conveyed to you in writing through the Police station.
`},
      {
        question: "I want to make my license valid in the whole of India. What should I do?",
        answer: `1.Submit an application (explaining the reasons) to the Government of Maharashtra, Pol-IX, Home Department, Mantralaya, Mumbai with a copy of the license.
2. The application will be sent to the Police station/Unit for an enquiry,
3. On receipt of the report, you will be interviewed by the appropriate authority.
4. The Government of Maharashtra will take the decision on merits and you will be informed accordingly.
`},
      {
        question: "I want to sell my weapon. What is the procedure?",
        answer: `1.Submit an application (on plain paper) with Rs.500/- court fees stamp and attach a copy of your license.
2. Inform Arms and Ammunition Branch/DM with relevant documents.
3. If all documents are in order, sale permission will be issued.
`},
    ],
    "FAQ's - Passport/Visa": [
      {
        question: "What is a Passport?",
        answer: "Passport is an official document, issued by competent authority on behalf of a sovereign nation state, certifying the holders identity and nationality, & authorizing the holder to travel abroad."
      },
      {
        question: "Where is the passport application form available?",
        answer: "Passport application forms are available at Regional Passport Offices. They are also available at http://passport.nic.in"
      },
      {
        question: "What are the fees for issuing a passport?",
        answer: `1. Fresh Passport ( 36 pages ) of 10 years validity- Rs. 1,000.
2. Fresh Passport ( 60 pages ) of 10 years validity - Rs. 1,500.
3. Fresh Passport for Minors ( Below 15 years of Age ) of 5 years validity - Rs.1000
(Cash either by Bank Draft in favor of the Passport Office or in Cash. In case of D.D. full name of the applicant and application number to be written on the reverse of the draft.)
4. Below 4 years-Rs 900
5. Between 4 years to 15 years - Rs- 1000`
      },
      {
        question: "What is the procedure if the passport is lost?",
        answer: "A complaint should be lodged in the concerned local police station and thereafter, an application for a new passport should be submitted."
      },
      {
        question: "How many days are required for police verification?",
        answer: "The verification procedure takes about 3 weeks from the receipt of the application."
      },
      {
        question: "What are the documents required to apply for a passport?",
        answer: `Attach two copies of the following documents:
1. Applicant's Ration Card or any of the following documents.
a) Telephone Bill.
b) Electricity Bill.
c) Bank Account Passbook.
d) Election Card.
e) Letter from the Society on letterhead.
f) NOC from the department if applicant is a Government servant.
2. Proof of date of birth : School leaving certificate / Birth certificate.
3. Citizenship documents (If applicant is citizen of India by registration or naturalization).
4. If the applicant does not reside on the present address for the last one year, an additional set of personal particulars form for each additional place of residence is required.
5. Colour Photographs (frontal view).
6. Two photographs are required for verification at the local police station.`
      },
      {
        question: "What is the procedure if the applicant is minor?",
        answer: `Attach following additional documents :-
a) Affidavit by legal guardian (if parents are not legal guardians).
b) Affidavit by two responsible persons who know the legal guardian as well as the minor.
c) Attested photocopy of passport if any, of both parents, incorporating their present marital status.`
      },
      {
        question: "What is procedure for change of name after marriage / divorce?",
        answer: `a) A woman applying for the first time for a passport in her married name or for change of name/surname in the existing passport on account of marriage should furnish:
i) A photocopy of the husband's passport (if issued to him).
ii) An attested copy of the marriage certificate issued by Registrar of Marriages or an affidavit from the husband and wife along with a joint photograph.
b) Divorcees applying for change of name or deletion of spouse's name in existing passport must furnish:
i) Divorce deed / Order of family court.
ii) Affidavit furnishing details about divorce.
c) Re-married applicants applying for a change of name/spouse's name should furnish:
i) Divorce/death certificate as the case may be in respect of first spouse, and
ii) Documents as (a) above relating to second marriage.`
      },

      {
        question: "List of applicants entitled to Emigration Check Not Required stamp (E.C.N.R.)",
        answer: `a)People going abroad in managerial capacity and possessing specialized degrees in their respective fields.
b)All Gazetted Government servants.
c)All Income-Tax payers (including Agricultural Income-Tax Payees) in their individual capacity. I.T. assessment orders issued by Income-Tax Dept. for last three years be submitted along with application for passport. If assessment order is not issued, copies of Income Tax Return stamped by Income Tax authority can be accepted.
d)All professional degree holders, such as doctors holding M.B.B.S. degree in Ayurveda or Homoeopathy, accredited Journalists, Engineers, Chartered Accountants, Cost Accountants, Lecturers, Teachers, Scientists, Advocates etc.
e)Spouses and dependent children up to the age of 24 years are listed from (b) to (d).
f)All persons who have been staying abroad for more than 3 years
g)Seamen who are in possession of CDC or C cadets.
h)All holders of Diplomatic/Official passports.
i)Dependent children of parents whose passports are classified as E.C.N.R. until they attain 24 years of age.
j)Persons holding permanent Immigrant Visas.
k)Persons holding Graduate or higher degrees.
l)Persons holding 3 years diploma equivalent to degrees.
m)Nurses possessing qualifications recognized under the Indian Nursing Council Act-1947.
n)All persons above the age of 60 years Note- No emigration clearance is required for visiting Bangladesh, Pakistan and all countries of Europe (Excluding C.I.S. States ), North America, Australia, Japan and
New Zealand.
o)No emigration clearance is required for persons possessing certificate of Vocational Training from the Government/ Government recognized institutions.`
      },
      {
        question: "What is a VISA?",
        answer: "VISA refers to an endorsement (writing or branding) on the passport, made by competent authority of a nation State, allowing entry to the passport holder into another country. VISA is necessary for entry into another country."
      },




      // ... add all other Passport/Visa FAQs
    ],
    "FAQ's - FIR / NC": [
      {
        question: "What is an F.I.R ?",
        answer: "F.I.R. means First Information Report, as per section 154 of Cr.p.c. made to police, about commission of a cognizable offence, In effect, it amounts to putting law in to motion by giving information relating to the commission of a cognizable offence to anofficer in charge of a police station, (which shall be reduced into writing and read over tothe informant) and shall be signed by the person giving such information. It is mandatory to give a copy of the first information report (as recorded by police) to the complainant or informant free of cost."
      },
      {
        question: "How do I lodge F.I.R.?",
        answer: "The informant/ complainant should go to the police station having jurisdiction over the area (where the offence is committed) and report to officer in-charge/ station house officer about commission of a cognizable offence. In case information is given on telephone, the informant / complainant should subsequently go to the police station for registration of F.I.R."
      },


      {
        question: "What is a cognizable case or What is cognizable offence ?",
        answer: "A cognizable case means a case in which a police officer may, in accordance with the First Schedule of Cr.P.C. (1973), or under any other law for the time being in force, arrest without warrant."
      },
      {
        question: "What is the meaning of the term ‘taking cognizance’?",
        answer: "The term ‘taking cognizance’ has not been defined in Code of Criminal Procedure. When any Magistrate takes cognizance under section 190 (1) (a) Cr.P.C., he must not only have applied his mind to the contents of the petition, but he must have done so for the purpose of proceeding in a particular way as per procedure prescribed in the Cr.P.C., and there after sending the complaint for further enquiry. A magistrate can also order investigations under section 156(3) of Cr.P.C."
      },

      {
        question: "What is a Non cognizable offence ?",
        answer: "Non cognizable offence means in which a police officer has no authority to investigate the matter and arrest without warrant."
      },

      {
        question: "How do I lodge a NC complaint ?",
        answer: "Information about such offences is to be given in a similar manner as explained under F.I.R.. The officer in-charge would reduce the complaint in writing (about commission of Non cognizable offence) and give a copy thereof to the complainant free of cost. No police officer can investigate a non-cognizable case unless he obtains prior permission of a Magistrate having power to try such case."
      },

      {
        question: "What is meant by a ‘complaint’ ?",
        answer: "Complaint means any allegation made orally or in writing to a Magistrate, with a view to his taking action under the code of criminal procedure (1973), that some person (whether known or unknown), has committed an offence."
      },


      {
        question: "What is meant by public place ?",
        answer: "Public place includes (and means) the foreshore, the precincts of every public building or monument, and all place accessible to the public for drawing water, washing or bathing or for the purpose of recreation. { M.P.Act 1951, sec 2(13) }"
      },



    ],
    "FAQ's - Prohibitory Orders": [
      {
        question: "What is meant by Prohibitory Orders?",
        answer: `Prohibitory Orders refer to orders issued by competent authorities prohibiting certain things under various ACTs viz,u/s 36,37 Maharashtra Police Act, 1951, u/s 144 Cr.P.C. etc.
      
      M.P. Act sec. 36: Power of Commissioner or the [Superintendent] and of other officers to give direction to the public. -
      In areas under their respective charges the Commissioner, and subject to his orders every Police Officer not inferior in rank to an Inspector, and the [Superintendent] and subject to his orders any Police Officer of not lower than such rank as may be specified by the State Government in that behalf, may from time to time as occasion may arise, but not so as to contravene any rule or order under section 33 give all such orders either orally or in writing as may be necessary to-
      (a) Direct the conduct of, and behavior or action of persons constituting processions or assemblies on or along the streets;
      (b) Prescribe the routes by which and the time at which any such processions may or may not pass;
      (c) Prevent obstructions on the occasion of all processions and assemblies and in the neighborhood of all places of worship during the time of worship and in all cases when any street or public place or place of public resort may be thronged or liable to be obstructed;
      (d) Keep order on and in all streets, quays, wharves, and at and within public bathing, washing and landing places, fairs, temples and all other places of public resort;
      (e) Regulate and control the playing of music or singing, or the beating of drums, tom-toms and other instruments and the blowing or sounding of horns or other noisy instruments in or near any street or public place;
      [(ea) Regulate and control the use of loudspeakers in or near any public place or in any place of public entertainment;]
      (f) Make reasonable orders subordinate to and in furtherance of any order made by a competent authority under sections 33, 35, 37 to 40, 42, 43 and 45 of this Act.
      
      
      M.P. Act sec. 37: Power to prohibit certain acts for prevention of disorder. -
      (1) The Commissioner and the District Magistrate in areas under their respective charges may, whenever and for such time as he shall consider necessary for the preservation of public peace or public safety by a notification publicly promulgated or addressed to individuals, prohibit at any town, village or place or in the vicinity of any such town, village or place-
      (a) the carrying of arms, cudgels, swords, spears, bludgeons, guns, knives, sticks or lathis, or any other article, which is capable of being used for causing physical violence,
      (b) the carrying of any corrosive substance or explosives;
      (c) the carrying, collection and preparation of stones or other missiles or instruments or means of casting or impelling missiles;
      (d) the exhibition of persons or corpses or figures or effigies thereof;
      (e) the public utterance of cries, singing of songs, playing of music;
      (f) delivery of harangues, the use of gestures or mimetic representation, and the preparation, exhibition or dissemination of pictures, symbols, placards or any other object or thing which may in the opinion of such authority offend against decency or morality or undermine the security of or tend to overthrow the State.
      Prohibitory Orders are issued by C.P. / D.M. under section 37 of M. P. Act 1951 Such orders are valid for a term of 15 days (at a time) and are renewed by the competent issuing authorities from time to time.
      
      Cr.P.C. Section 144 - Power to issue order in urgent cases of nuisance or apprehended danger
      (1) In cases where, in the opinion of a District Magistrate, a Sub-divisional Magistrate or any other Executive Magistrate specially empowered by the State Government in this behalf, there is sufficient ground for proceeding under this section and immediate prevention or speedy remedy is desirable, such Magistrate may, by a written order stating the material facts of the case and served in the manner provided by section 134, direct any person to abstain from a certain act or to take certain order with respect to certain property in his possession or under his management, if such Magistrate considers that such direction is likely to prevent, or tends to prevent, obstruction, annoyance or injury to any person lawfully employed, or danger to human life, health or safely, or a disturbance of the public tranquility, or a riot, or an affray.
      (2) An order under this section may, in cases of emergency or in cases where the circumstances do not admit of the serving in due time of a notice upon the person against whom the order is directed, be passed ex parte.
      (3) An order under this section may be directed to a particular individual, or to persons residing in a particular place or area, or to the public generally when frequenting or visiting a particular place or area.
      (4) No order under this section shall remain in force for more than two months from the making thereof:
      Provided that, if the State Government considers it necessary so to do for preventing danger to human life, health or safety or for preventing a riot or any affray, it may, by notification, direct that an order made by a Magistrate under this section shall remain in force for such further period not exceeding six months from the date on which the order made by the Magistrate would have, but for such order, expired, as it may specify in the said notification.
      (5) Any Magistrate may, either on his own motion or on the application of any person aggrieved, rescind or alter any order made under this section, by himself or any Magistrate subordinate to him or by his predecessor-in-office.
      (6) The State Government may, either on its own motion or on the application of any person aggrieved, rescind or alter any order made by it under the proviso to sub­section (4).
      (7) Where an application under sub-section (5), or sub-section (6) is received, the Magistrate, or the State Government, as the case may be, shall afford to the applicant an early opportunity of appearing before him or it, either in person or by pleader and showing cause against the order, and if the Magistrate or the State Government, as the case may be, rejects the application wholly or in part, he or it shall record in writing the reasons for so doing.
      
      `},
      {
        question: "What is the penalty for contravention / breach of prohibitory orders under section 36, 37 M.P. Act 1951 and u/s 144 Cr.P.C.?",
        answer: "Section 134, 135 of M.P. Act 1951 provides for penal action for such contravention."
      },
      {
        question: "What is the penalty for contravention / breach of prohibitory orders under section 144 Cr.P.C.?",
        answer: "Section 188 of Indian Penal Code provides for penal action for such contravention."
      }
    ],
    "FAQ's - Arrest - Bail": [
      {
        question: "What is 'Arrest'?",
        answer: `As per Ballentine's Law Dictionary 1948 Ed.P.105, arrest means the taking, seizing, or detaining of the person of another, either by touching, or putting hands on him, or by any act which indicates an intention to take him into custody, and subjects the person arrested to the actual control and will of the person making the arrest.
      
      Chapter V and section 41 to 59 of Criminal Procedure Code 1973, deals with Arrest of Persons.
      
      As per section 41 (1) Cr.P.C, Cr.P.C, any police officer may, without an order from a Magistrate and without a warrant, arrest any person,
      (a) who has been concerned in any cognizable offence, or a reasonable complaint has been made, or credible information has been received or a reasonable suspicion exists; or
      (b) who has in his possession of any implement of house breaking; or
      (c) who has been proclaimed as an offender or
      (d) in whose possession anything is found which may reasonably be suspected to be stolen property; or
      (e) who obstructs a police officer while in the execution of his duty, or who has escaped, or attempts to escape, from lawful custody;
      (f) reasonably suspected of being a deserter from any of the Armed Forces.
      
      As per Section 41A Cr.P.C. - Notice of appearance before police officer.
      (1) The police officer may, in all cases where the arrest of a person is not required under the provisions of sub-section (1) of section 41, issue a notice directing the person against whom a reasonable complaint has been made, or credible information has been received, or a reasonable suspicion exists that he has committed a cognizable offence, to appear before him or at such other place as may be specified in the notice.
      (2) Where such a notice is issued to any person, it shall be the duty of that person to comply with the terms of the notice.
      (3) Where such person complies and continues to comply with the notice, he shall not be arrested in respect of the offence referred to in the notice unless, for reasons to be recorded, the police officer is of the opinion that he ought to be arrested.
      (4) Where such person, at any time, fails to comply with the terms of the notice, it shall be lawful for the police officer to arrest him for the offence mentioned in the notice, subject to such orders as may have been passed in this behalf by a competent Court.
      
      Hon’ble Supreme court gives directions for arrest of accused
      As per section 42 of Cr.P.C., any person who, in the presence of a police officer, has committed or has been accused of committing a non-cognizable offence, refuses on demand of such officer to give his name and residence, can be arrested.
      
      As per section 50 of Cr.P.C., person arrested without warrant has to be informed about the grounds of his arrest and about his entitlement regarding bail.
      
      As per section 53 of Cr.P.C.,when a person is arrested and if there are reasonable grounds for believing that an examination of his person will afford evidence as to the commission of an offence, it shall be lawful for a registered medical practitioner, acting at the request of a police officer not below the rank of sub-inspector (and for any person acting in good faith in his aid and his direction), to make such an examination of a person arrested as is reasonably necessary, and to use such force as is reasonably necessary for that purpose. When a person of a female is to be examined under this section, the examination shall be made only by, or under the supervision of, a female registered medical practitioner.
      
      As per section 56 of Cr.P.C., A police officer making an arrest without warrant shall, without unnecessary delay and subject to the provisions herein contained as to bail, take or send the person arrested before a Magistrate having jurisdiction in the case or before the officer in-charge of a police station.
      
      As per section 57 of Cr.P.C., No police officer shall detain in custody a person arrested without warrant for a longer period than under all the circumstances of the case is reasonable, and such period shall not, in the absence of a special order of a Magistrate under section 167, exceed 24 hours exclusive of the time necessary for the journey from the place of arrest to the Magistrate's Court.
      
      As per section 151 of Cr.P.C., a person can also be arrested to prevent commission of cognizable offences.
      `
      },
      {
        question: "What is meant by 'Bailable / Non-bailable offences'?",
        answer: `1. Under the Code of Criminal Procedure 1973 (first schedule), offences have been classified as ‘bailable’ and ‘non-bailable’ offences.

2.In the case of bailable offences, it is binding upon the court to grant bail. However, in case of a non-bailable offence, the police cannot grant bail and bail can be granted by a Judicial Magistrate/Judge only.

3.In case of bailable offences, if the accused produces proper surety, and fulfills other conditions, it is binding upon the Court to grant bail.

4.In the case of a non-bailable offence, the Investigating Officer must produce the accused before the Judicial Magistrate / Judge concerned within 24 hours of his arrest, after the police custody and court take in magistrate custody. At that time, the accused has a right to apply for bail.
    `
      }
    ],
    "FAQ's - Loudspeaker": [
      {
        question: "Do I need permission for using loud speakers?",
        answer: "Yes. You should obtain permission from concerned C.P/ S.P./ District Magistrate for sound amplification under rules made under sec 33 of B.P.Act,1951. Such a permission is required to be taken for private/ public functions held in private / public places."
      },
      {
        question: "Do I need license for public show of cinema?",
        answer: "Yes. You have to obtain a temporary performance license from concerned licensing authority (C.P./D.M.)."
      },
      {
        question: "Do I need license/ permission for dramatic/mimetic/musical performances?",
        answer: "Yes. You have to obtain a temporary performance/premises license from concerned licensing authority (C.P./D.M.)."
      },
      {
        question: "Do I need to take permission for organizing a morcha/dharna/public meeting or rally?",
        answer: `Yes. You need to take permission for taking out a morcha/ dharna/ organising public meeting or rallies from concerned Commissioner of Police or District Magistrate.


            A loud speaker or a public address system shall not be used at night (between 10.00 p.m. to 6.00 a.m.) except in closed premises for communication within, e.g. auditoria, conference rooms, conference rooms, community halls and banquet halls. `
      }
    ],
    "FAQ's - Externmen": [
      {
        question: "What is meant by externment?",
        answer: `As per section 55 of Maharashtra Police Act, 1951, if the movement or encampment of any gang or body of persons is causing or is calculated to cause danger or alarm or reasonable suspicion that unlawful designs are entertained by such gang, or by members thereof, then such gangs/ bodies of persons can be dispersed and ordered that they remove themselves outside the area. This is process is called externment of gangs and Sub Divisional Magistrates in Districts and DCsP in Commissionerates are empowered to pass such orders. Similarly, section 56 of Maharashtra Police Act, 1951 empowers the above named authorities to extern persons engaged in or about to be engaged in offences punishable under Ch XII - XVI – XVII I.P.C. .(for details, please refer sections 55-56 of Maharashtra Police Act, 1951 )`
      },
      {
        question: "What is preventive detention?",
        answer: "When the executive officers charged with responsibility of maintaining law and order / Public order in their jurisdictions have reasons to believe that activities/ movements of a person are detrimental / prejudicial to maintaining public tranquility and smooth flow of life, such authorities (C.P./D.M.) may authorize and order such a person to be detained under the various preventive detention laws."
      },
      {
        question: "What are the executive powers (of CP/DM & other empowered officials) to prohibit certain acts for prevention of disorder?",
        answer: "The commissioner of Police and the District Magistrate in areas under their respective charges may issue order in writing u/s 37 (3) of Maharashtra Police Act, 1951 for prohibiting any assembly or procession whenever and for so long as it consider such prohibition necessary for preservation of the public order. Such written order can also be issued for prohibiting the carrying of arms, swords, spears, guns, knives, sticks or lathis, or any other article, which is capable of being used for causing physical violence."
      }
    ],
    "FAQ's - Noise Pollution": [
      {
        question: "What is Noise Pollution?",
        answer: "Noise pollution means the disturbance produced in environment by undesirable sounds of various kinds."
      },
      {
        question: "What are the ill-effects of noise pollution?",
        answer: `a) Noise as nuisance and health hazard to human beings and other living things
b) Hearing loss
c) Interference with communication
d) Disturbance of sleep
e) Annoyance
f) Adverse effect on performance
g) Physiological effects
h) Accentuated effects on urban children, sick & elderly people under recuperation.`
      },
      {
        question: "What are the restrictions and limits of noise level?",
        answer: (
          <div>
            <table className="w-full border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Area Code</th>
                  <th className="border border-gray-300 p-2">Category of Area/Zone</th>
                  <th className="border border-gray-300 p-2">Day Time (dB)</th>
                  <th className="border border-gray-300 p-2">Night Time (dB)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">A</td>
                  <td className="border border-gray-300 p-2">Industrial area</td>
                  <td className="border border-gray-300 p-2 text-center">75</td>
                  <td className="border border-gray-300 p-2 text-center">70</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">B</td>
                  <td className="border border-gray-300 p-2">Commercial area</td>
                  <td className="border border-gray-300 p-2 text-center">65</td>
                  <td className="border border-gray-300 p-2 text-center">55</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">C</td>
                  <td className="border border-gray-300 p-2">Residential area</td>
                  <td className="border border-gray-300 p-2 text-center">55</td>
                  <td className="border border-gray-300 p-2 text-center">45</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">D</td>
                  <td className="border border-gray-300 p-2">Silence Zone</td>
                  <td className="border border-gray-300 p-2 text-center">50</td>
                  <td className="border border-gray-300 p-2 text-center">40</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <p className="font-bold mb-2">Important Notes:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Day time: 6:00 AM to 10:00 PM</li>
                <li>Night time: 10:00 PM to 6:00 AM</li>
                <li>Silence zone is defined as an area comprising not less than 100 meters around hospitals, educational institutions and courts. The silence zones are zones which are declared as such by the competent authority.</li>
                <li>Mixed categories of areas may be declared as one of the four above-mentioned categories by the competent authority.</li>
              </ol>
            </div>
          </div>
        )
      }
    ],
    "FAQ's - Hotel Branch": [
      {
        question: "Is a Police licence required for Hotels, Restaurant, eating House, Tea Stall, Juice Center etc?",
        answer: "No (License is not required by the government order dated December 22, 2015)."
      },
      {
        question: "From where the Registration Certificate is issued?",
        answer: "License is not required by the government order dated December 22, 2015."
      },
      {
        question: "What is the fee for obtaining a Registration Certificate?",
        answer: "Registration charges are not required because the licenses are not required by the government order dated December 22, 2015."
      },
      {
        question: "Is it necessary to obtain a FL3 licence from the excise Department first and then from Police?",
        answer: "Police License is not required by the government order dated December 22, 2015."
      },
      {
        question: "What kind of license are given to Hotels from Police Department?",
        answer: "Orchestra, D. J. Music, Ghazals, etc. a space license grants for the entertainment program."
      },
      {
        question: "Where is the Police Licence available?",
        answer: "1) Police Licenses are issued from the office of the Police Commissioner.2) Orchestra, D. J. Music, Ghazals, etc. a space license grants for the entertainment program."
      },
      {
        question: "What kind of a license is required for a permit room ?",
        answer: "Police License is not required by the government order dated December 22, 2015."
      },
      {
        question: "What kind of License is issued for a guest-house/ lodge?",
        answer: "Police License is not required by the government order dated December 22, 2015."
      },
      {
        question: "What is FL-III and FL-IV and how it is obtained?",
        answer: "FL-III and FL-IV licences are issued by the excise Department."
      }
    ]
  });


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo-new.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to the official website of Dhule Police. Stay informed and connected with our community-focused initiatives and safety measures."
        />
        <meta property="og:title" content="Dhule Police" />
        <meta
          property="og:description"
          content="Official website of Dhule Police"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmafmaoif/image/upload/v1735280919/logo-new_thddod.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Official website of Dhule Police"
        />
        <meta name="twitter:title" content="Dhule Police" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmafmaoif/image/upload/v1735280919/logo-new_thddod.png"
        />

        <title>FAQs | Dhule Police</title>
      </Head>
      <main className="h-full bg-gray-50">
        <Navbar />
        <div className="py-10 w-full flex flex-col">
          <div className="w-full max-w-6xl min-h-[10vh] mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t("faqs")}
              </h1>
              <div className="w-32 border-b-4 border-orange-500 mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Find answers to commonly asked questions about police services, procedures, and regulations.
              </p>
            </div>

            {/* Category Selector */}
            <div className="max-w-4xl mx-auto mb-12">
              <select
                className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                           bg-white transition-all duration-200"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
                {Object.keys(faqData).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* FAQ Content */}
            {selectedCategory && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">
                      {selectedCategory}
                    </h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="divide-y divide-gray-200">
                    {faqData[selectedCategory]?.map((faq, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                              {(index + 1).toString().padStart(2, '0')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                              {faq.question}
                            </h3>
                            <div className="text-gray-600 prose prose-sm max-w-none">
                              {typeof faq.answer === 'string' ? (
                                <p className="whitespace-pre-line">{faq.answer}</p>
                              ) : (
                                faq.answer
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!selectedCategory && (
              <div className="text-center text-gray-500 mt-8">
                Please select a category to view relevant FAQs
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default faqs;

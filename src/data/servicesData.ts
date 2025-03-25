import { Brain, Heart, Clock, Baby, Stethoscope, Activity } from "lucide-react";

// Service details type definition
export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  icon: any;
  detailedDescription: string;
  keyHighlights: {
    title: string;
    description: string;
  }[];
  targetAudience: string;
  procedures: string[];
  relatedServices: string[];
}

// Complete service data with all necessary details
export const servicesData: Record<string, ServiceDetail> = {
  "emergency-care": {
    id: "emergency-care",
    title: "Emergency Care",
    shortDescription: "24/7 emergency services with rapid response teams for critical situations.",
    heroImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Clock,
    detailedDescription: "Our Emergency Care department provides immediate and comprehensive medical attention for acute illnesses, injuries, and life-threatening conditions. With a team of specialized emergency physicians, nurses, and support staff available 24/7, we're equipped to handle any medical crisis with speed and precision. Our state-of-the-art facilities include trauma bays, critical care units, and advanced diagnostic imaging available round-the-clock to ensure prompt diagnosis and treatment.",
    keyHighlights: [
      {
        title: "Rapid Response Teams",
        description: "Specialized teams ready to mobilize within minutes for critical emergencies"
      },
      {
        title: "Advanced Trauma Center",
        description: "Level I trauma center equipped to handle the most severe and complex cases"
      },
      {
        title: "24/7 Diagnostic Imaging",
        description: "Immediate access to CT scans, MRI, ultrasound, and X-ray services"
      },
      {
        title: "Specialized Emergency Protocols",
        description: "Evidence-based protocols for stroke, heart attack, and other time-sensitive conditions"
      }
    ],
    targetAudience: "Our emergency services are designed for anyone experiencing a sudden illness or injury requiring immediate medical attention. This includes severe pain, breathing difficulties, major injuries, uncontrolled bleeding, suspected heart attack or stroke, severe burns, or any condition that could potentially threaten life or limb.",
    procedures: [
      "Initial assessment and triage",
      "Emergency stabilization",
      "Diagnostic testing and imaging",
      "Emergency surgical procedures",
      "Critical care monitoring",
      "Emergency medication administration"
    ],
    relatedServices: ["cardiology", "neurology", "specialized-surgery"]
  },
  "cardiology": {
    id: "cardiology",
    title: "Cardiology",
    shortDescription: "Comprehensive heart care from prevention to advanced treatments and surgery.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Heart,
    detailedDescription: "Our Cardiology department offers a full spectrum of heart care services, from preventive screenings and diagnostic evaluations to advanced interventional procedures and cardiac rehabilitation. Led by board-certified cardiologists with specialized training in various aspects of cardiovascular medicine, our team utilizes the latest technology and evidence-based approaches to diagnose and treat heart conditions. We're committed to not only treating heart disease but also helping patients manage risk factors and maintain heart health through lifestyle modifications and personalized care plans.",
    keyHighlights: [
      {
        title: "Advanced Cardiac Imaging",
        description: "State-of-the-art echocardiography, cardiac CT, and MRI for precise diagnosis"
      },
      {
        title: "Interventional Cardiology",
        description: "Minimally invasive procedures including angioplasty and stent placement"
      },
      {
        title: "Electrophysiology Services",
        description: "Diagnosis and treatment of heart rhythm disorders with advanced mapping systems"
      },
      {
        title: "Comprehensive Cardiac Rehabilitation",
        description: "Medically supervised programs to help patients recover from heart procedures and events"
      }
    ],
    targetAudience: "Our cardiology services are suitable for patients with known heart conditions, those at risk due to family history or lifestyle factors, individuals experiencing symptoms such as chest pain, shortness of breath, palpitations, or dizziness, and those requiring ongoing management of chronic heart disease. We also provide preventive cardiology services for those looking to maintain heart health and reduce future risks.",
    procedures: [
      "Comprehensive cardiac assessments",
      "ECG and stress testing",
      "Heart rhythm monitoring",
      "Cardiac catheterization",
      "Coronary angioplasty and stenting",
      "Pacemaker and defibrillator implantation",
      "Valve repair and replacement"
    ],
    relatedServices: ["emergency-care", "specialized-surgery", "general-checkups"]
  },
  "neurology": {
    id: "neurology",
    title: "Neurology",
    shortDescription: "Expert diagnosis and treatment of conditions affecting the nervous system.",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    icon: Brain,
    detailedDescription: "Our Neurology department specializes in the diagnosis, treatment, and management of disorders affecting the brain, spinal cord, nerves, and muscles. With a team of highly trained neurologists and neurosurgeons supported by advanced diagnostic technology, we provide comprehensive care for a wide range of neurological conditions. From common disorders like migraines and seizures to complex conditions such as multiple sclerosis, stroke, and neurodegenerative diseases, our specialists develop personalized treatment plans focused on improving quality of life and neurological function.",
    keyHighlights: [
      {
        title: "Comprehensive Neurological Diagnostics",
        description: "Advanced EEG, EMG, and neuroimaging capabilities for accurate diagnosis"
      },
      {
        title: "Specialized Stroke Center",
        description: "Rapid response protocols and advanced interventions for stroke treatment"
      },
      {
        title: "Neurodegenerative Disease Management",
        description: "Expert care for Alzheimer's, Parkinson's, and other progressive neurological conditions"
      },
      {
        title: "Headache and Pain Management Program",
        description: "Multidisciplinary approach to chronic neurological pain conditions"
      }
    ],
    targetAudience: "Our neurology services are appropriate for patients experiencing symptoms such as headaches, dizziness, numbness, tingling, weakness, movement problems, coordination difficulties, seizures, or changes in mental status. We also provide care for individuals with diagnosed neurological conditions requiring ongoing management, as well as those with neurological emergencies requiring immediate attention.",
    procedures: [
      "Neurological examinations",
      "Diagnostic testing (EEG, EMG, NCS)",
      "Advanced neuroimaging",
      "Lumbar puncture procedures",
      "Botox therapy for migraines and movement disorders",
      "Medication management",
      "Cognitive assessments",
      "Rehabilitation coordination"
    ],
    relatedServices: ["emergency-care", "specialized-surgery", "general-checkups"]
  },
  "pediatrics": {
    id: "pediatrics",
    title: "Pediatrics",
    shortDescription: "Specialized care for children from newborns to adolescents in a family-friendly environment.",
    heroImage: "https://images.unsplash.com/photo-1559685003-a4a327382396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Baby,
    detailedDescription: "Our Pediatrics department is dedicated to providing comprehensive healthcare for infants, children, and adolescents in a warm, friendly environment designed with young patients in mind. Our team of pediatricians and pediatric specialists are experts in addressing the unique health needs of growing bodies and developing minds. From routine well-child visits and immunizations to the management of acute illnesses and chronic conditions, we provide personalized care that considers not just the physical health of the child, but also their emotional and developmental wellbeing.",
    keyHighlights: [
      {
        title: "Child-Friendly Environment",
        description: "Specially designed spaces to reduce anxiety and make medical visits positive experiences"
      },
      {
        title: "Comprehensive Well-Child Care",
        description: "Regular check-ups to monitor growth, development, and prevent health problems"
      },
      {
        title: "Pediatric Specialists",
        description: "Access to specialists in various pediatric subspecialties when needed"
      },
      {
        title: "Family-Centered Approach",
        description: "Involving parents and caregivers as essential partners in children's healthcare"
      }
    ],
    targetAudience: "Our pediatric services are designed for patients from birth through adolescence. We provide care for healthy children requiring routine check-ups and preventive care, children with acute illnesses or injuries, and those with chronic health conditions requiring ongoing management. Our services also extend to behavioral and developmental concerns, as well as guidance for parents on nutrition, safety, and other aspects of child health.",
    procedures: [
      "Well-child examinations",
      "Growth and development monitoring",
      "Immunizations",
      "School and sports physicals",
      "Diagnostic testing appropriate for pediatric patients",
      "Management of acute illnesses and injuries",
      "Chronic condition management",
      "Behavioral and developmental assessments"
    ],
    relatedServices: ["emergency-care", "general-checkups", "specialized-surgery"]
  },
  "general-checkups": {
    id: "general-checkups",
    title: "General Checkups",
    shortDescription: "Routine health assessments and preventive care for patients of all ages.",
    heroImage: "https://images.unsplash.com/photo-1571772996211-2f02974a304d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Stethoscope,
    detailedDescription: "Our General Checkup service provides comprehensive health assessments designed to evaluate your current health status, identify potential health risks, and develop preventive strategies to maintain optimal health. Led by experienced primary care physicians, our checkups go beyond basic examinations to include age-appropriate screenings, laboratory tests, and lifestyle evaluations. We believe that preventive care is the cornerstone of good health, and our thorough assessments are designed to catch potential health issues before they become serious problems.",
    keyHighlights: [
      {
        title: "Comprehensive Health Assessment",
        description: "Head-to-toe physical examination and detailed health history review"
      },
      {
        title: "Personalized Health Risk Analysis",
        description: "Identification of individual risk factors based on family history and lifestyle"
      },
      {
        title: "Preventive Screenings",
        description: "Age and risk-appropriate screenings for common health conditions"
      },
      {
        title: "Health Maintenance Planning",
        description: "Development of personalized health maintenance and improvement strategies"
      }
    ],
    targetAudience: "Our general checkup services are appropriate for adults of all ages seeking to maintain or improve their health through preventive care. They are particularly valuable for individuals who haven't had a medical examination in over a year, those with new or changing health concerns, individuals with family histories of specific medical conditions, and those looking to establish baseline health measurements for future comparison.",
    procedures: [
      "Comprehensive physical examination",
      "Vital signs assessment",
      "Laboratory blood work",
      "Urinalysis",
      "Cardiovascular risk assessment",
      "Cancer screenings as appropriate",
      "Immunization review and updates",
      "Vision and hearing screening",
      "Mental health assessment"
    ],
    relatedServices: ["cardiology", "neurology", "pediatrics"]
  },
  "specialized-surgery": {
    id: "specialized-surgery",
    title: "Specialized Surgery",
    shortDescription: "Advanced surgical procedures using the latest techniques and technology.",
    heroImage: "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    icon: Activity,
    detailedDescription: "Our Specialized Surgery department offers a wide range of advanced surgical procedures performed by highly skilled surgeons with expertise in various specialties. Using the latest surgical techniques and state-of-the-art technology, including minimally invasive and robotic-assisted approaches, we provide surgical care that focuses on precision, reduced recovery time, and optimal outcomes. Our surgical teams are supported by dedicated anesthesiologists, specialized nursing staff, and comprehensive pre-operative and post-operative care services to ensure the highest standards of patient safety and comfort throughout the surgical journey.",
    keyHighlights: [
      {
        title: "Minimally Invasive Techniques",
        description: "Reduced incision size, less pain, and faster recovery compared to traditional surgery"
      },
      {
        title: "Robotic-Assisted Surgery",
        description: "Enhanced precision and control for complex procedures"
      },
      {
        title: "Multidisciplinary Surgical Teams",
        description: "Collaboration between specialists for comprehensive surgical planning and care"
      },
      {
        title: "Advanced Post-Operative Care",
        description: "Specialized recovery protocols designed to optimize healing and minimize complications"
      }
    ],
    targetAudience: "Our specialized surgical services are appropriate for patients requiring surgical intervention for various conditions who are seeking high-quality care with advanced techniques. This includes individuals with conditions requiring general surgery, orthopedic procedures, cardiac surgery, neurosurgery, oncological surgery, and other specialized procedures. Our services are suitable for patients seeking elective procedures as well as those requiring urgent surgical care.",
    procedures: [
      "Minimally invasive laparoscopic procedures",
      "Robotic-assisted surgery",
      "Complex reconstructive surgery",
      "Joint replacement surgery",
      "Cardiac and vascular procedures",
      "Neurosurgical interventions",
      "Oncological surgery",
      "Bariatric surgery",
      "Transplant surgery"
    ],
    relatedServices: ["emergency-care", "cardiology", "neurology"]
  },
  "general-medicine": {
    id: "general-medicine",
    title: "General Medicine",
    shortDescription: "Primary care services with expert physicians for routine check-ups and chronic disease management.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Stethoscope,
    detailedDescription: "Our General Medicine department is the cornerstone of our healthcare services, providing comprehensive primary care for patients of all ages. Our physicians are trained to diagnose and treat a wide range of conditions, from acute illnesses to chronic diseases. We focus on preventive care, health maintenance, and coordinating with specialists when needed to ensure you receive complete, integrated healthcare.",
    keyHighlights: [
      {
        title: "Comprehensive Primary Care",
        description: "Complete healthcare services for individuals and families of all ages"
      },
      {
        title: "Chronic Disease Management",
        description: "Specialized programs for diabetes, hypertension, asthma, and other chronic conditions"
      },
      {
        title: "Preventive Medicine",
        description: "Health screenings, immunizations, and lifestyle counseling to prevent illness"
      },
      {
        title: "Coordinated Care",
        description: "Seamless referrals and communication with specialists for complex conditions"
      }
    ],
    targetAudience: "Our general medicine services are designed for patients of all ages seeking primary care, preventive services, management of chronic conditions, or treatment for common illnesses. Whether you need a routine check-up, are managing an ongoing health condition, or require diagnosis and treatment for a new health concern, our general medicine team provides personalized, patient-centered care.",
    procedures: [
      "Comprehensive physical examinations",
      "Diagnostic testing and interpretation",
      "Chronic disease monitoring and management",
      "Minor procedures and treatments",
      "Health risk assessments",
      "Preventive screenings",
      "Immunizations for all age groups",
      "Health education and counseling"
    ],
    relatedServices: ["general-checkups", "emergency-care", "cardiology"]
  },
  "orthopedics": {
    id: "orthopedics",
    title: "Orthopedics",
    shortDescription: "Comprehensive care for bones, joints, muscles, and sports injuries with surgical and non-surgical options.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Activity,
    detailedDescription: "Our Orthopedics department specializes in the diagnosis, treatment, rehabilitation, and prevention of injuries and disorders of the musculoskeletal system. From sports injuries and fractures to joint replacements and spine surgery, our orthopedic specialists use advanced techniques and technologies to restore function, reduce pain, and improve quality of life. We offer both surgical and non-surgical approaches tailored to each patient's unique needs.",
    keyHighlights: [
      {
        title: "Minimally Invasive Surgery",
        description: "Advanced techniques with smaller incisions, less pain, and faster recovery"
      },
      {
        title: "Sports Medicine",
        description: "Specialized care for athletes and active individuals with sport-related injuries"
      },
      {
        title: "Joint Replacement",
        description: "State-of-the-art artificial joint options with personalized surgical approaches"
      },
      {
        title: "Comprehensive Rehabilitation",
        description: "Integrated physical therapy and rehabilitation services for optimal recovery"
      }
    ],
    targetAudience: "Our orthopedic services are ideal for patients experiencing pain, stiffness, or reduced mobility in bones, joints, or muscles. This includes individuals with sports injuries, arthritis, fractures, sprains, tendonitis, and other musculoskeletal conditions. We also provide care for those requiring joint replacements, spine surgery, or reconstructive procedures, as well as athletes seeking to improve performance and prevent injuries.",
    procedures: [
      "Joint arthroscopy and reconstruction",
      "Total and partial joint replacement",
      "Fracture repair and management",
      "Ligament and tendon repair",
      "Spinal surgery and therapy",
      "Sports injury treatment",
      "Cartilage restoration",
      "Orthopedic trauma care",
      "Physical and occupational therapy"
    ],
    relatedServices: ["specialized-surgery", "emergency-care", "general-checkups"]
  }
};

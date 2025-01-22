import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Admission() {
    return (
        <section id="admission-faq" className="w-full bg-brand-tertiary">
            <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20 flex flex-col gap-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-secondary">
                    Frequently Asked Questions
                </h2>

                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="curriculum">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                1. What curriculum will KBH use?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Knightsbridge House (KBH) adopts the internationally recognized Cambridge curriculum
                                that emphasizes academic excellence, critical thinking, and holistic development. We
                                integrate English, Mandarin and Thai languages as well as the Singapore Mathematics
                                approach into the curriculum. This ensures our students are well-prepared for future
                                success.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="certificates">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                2. What kind of academic certificates will KBH students receive? Can they be used overseas?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                KBH follows the Cambridge curriculum from the UK and students will take the
                                Cambridge Checkpoint (Lower Secondary) at Year 9, IGCSEs at Year 11, and A Levels
                                qualifications at Year 13, ensuring that they qualify for the best universities in Thailand
                                and globally.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="assessment">
                            <AccordionTrigger className="text-lg sm:text-xl font-bold text-left">
                                3. Will there be any assessment to enter the school?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                During the admissions process, the academic background of each student will be
                                considered in order to place them at the appropriate learning group. In general, no
                                assessments will be required for students that have the required academic background.
                                Where there are concerns or special cases where we are unable to assess the academic
                                abilities of a students, discussions with parents will be held and an assessment by
                                Cambridge may be arranged. This is to evaluate a student's current academic level and
                                language proficiency, ensuring they are placed in the most suitable group and provide
                                feedback for KBH teachers to support their learning needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="foundation">
                            <AccordionTrigger className="text-lg sm:text-xl font-bold text-left">
                                4. Will there be a foundation course for students who are weak in English?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Yes. For students transitioning from local Thai schools, we offer a 12-week International
                                Preparatory Program from May till July, tailored to students who require additional
                                support in both English as well as Mandarin. This program will focus on improving
                                language proficiency but also ensure they can fully engage with our curriculum,
                                international teaching approach and classroom activities.
                                <br /><br />
                                For students who require more help for English during the academic term itself, they can
                                opt for extra English Language Learning Support to enable them to meet the minimum
                                required English requirements.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="learning-support">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                5. If my child is weak in certain subjects or has been homeschooled, how will KBH help them to catch up?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                For students who need learning support, KBH offers Personalised Learning Pathways
                                ("PLP") to enable them to improve quickly. The PLPs provide continued customised
                                support for students who require additional assistance in areas such as English,
                                Mandarin, Thai, or Mathematics support.
                                <br /><br />
                                Class teachers will lead the support with qualified Teacher Assistants supporting the
                                PLPs during school hours, either during the lesson in class, or withdrawn from lessons
                                in small learning clusters, individually or with students who may be at a similar level.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="teachers">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                6. Who will be the homeroom teachers and subject teachers? Will all teachers be native speakers?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Our teaching staff will include a mix of international teachers, and highly qualified
                                educators with strong experience in international education. Language classes will be
                                taught by native language speakers.
                                <br /><br />
                                Teachers will hold relevant specialist degrees and teaching qualifications, and most will
                                have experience teaching in multicultural environments. Their focus will be on
                                delivering high-quality education and fostering a nurturing learning atmosphere.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="classroom-teachers">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                7. How many teachers will be in one classroom? Will there be any Teacher Assistants (TAs)?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Each classroom will have one primary teacher, and a Teacher Assistant (TA) will be
                                present in Year 1 classes to ensure individualized attention and smooth transition into
                                primary years for every student.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="class-size">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                8. How many students will be in one classroom? Will there be a well-being/ethnic proportion?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                To maintain a high standard of personalized education, classroom sizes will be limited
                                to 25 students, ensuring every child receives ample attention and support. In addition,
                                KBH values diversity and inclusivity and will strive to maintain a balanced and
                                harmonious classroom environment that reflects an international ethos.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="mixed-years">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                9. Will students from different years be placed together in one classroom?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                No, each year level will have its own dedicated curriculum and teacher. While class
                                sizes may initially be smaller, students will not be combined across years for academic
                                subjects to ensure their academic and developmental needs are met appropriately.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="school-start">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                10. When will the school start?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                The school will run its International Preparation Program from 12 May 25 to 1 Aug 25.
                                The AY 25/26 school term is set to begin on 13 Aug 2025, welcoming its first cohort of
                                students.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="year-groups">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                11. How many years will open in Academic Year 2025/2026, and what are the plans for subsequent years?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                In August 2025, we plan to open with Year 1 to Year 8 (primary and early secondary
                                years). One additional year will be introduced subsequently, eventually catering to
                                students up to Year 13.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="house-system">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                12. Will there be a house system?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Yes, we plan to implement a house system to foster camaraderie, teamwork, and
                                school spirit. Students will participate in house-based activities, events, and
                                competitions throughout the year.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="school-type">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                13. Will the school be a full international school or an international program at a Thai school?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                KBH will be a fully independent international school, not an international program
                                within a Thai school. While located within the premises of Pichayasuksa School, our
                                school will be separated physically, with seperate management, and the curriculum,
                                teaching staff, and operational standards adhering to international school benchmarks.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="moe-recognition">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                14. Will the school be recognized by the Thai Ministry of Education (MOE)?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Yes, KBH will be accredited by the Thai Ministry of Education (MOE) and comply with
                                international education standards.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="tuition-fees">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                15. How much are the tuition fees per year?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                The tuition fees will be THB 160,000 per year for Academic Year 2025/2026. For
                                Founding KBH students that enrol in this academic year, tuition fees will be fixed for
                                the next 5 years (Limited Seats). There are no application, enrolment or development
                                fees, because KBH believes in quality international education for everyone.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="early-bird">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                16. Will there be any discount for early birds?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                For Founding KBH students, enrolled in the Academic Year 2025/2026, tuition fees
                                will be fixed for the next 5 years (Limited Seats).
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="installments">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                17. Can the tuition fee be paid in instalments?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Yes. Tuition Fees are payable on a termly basis and invoices will be sent out one term
                                in advance.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="affordable">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                18. How are you able to keep tuition fees so affordable?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                We do not compromise on academic quality and delivery and seek to hire and retain
                                the best teachers. Students are also assured to have sufficient quality learning facilities.
                                <br /><br />
                                To keep prices affordable, we adopt a sustainable and efficient approach to running
                                the school operations, using IT where possible to automate and reduce administrative
                                tasks. We ensure facilitates are sufficient and pass any savings on to you.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="shared-facilities">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                19. Will the KBH International school students share facilities with Pichayasuksa school students?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                KBH operates as a separate school within its own compound with its own sufficient
                                teaching facilities. Students from other schools cannot enter the teaching premises of
                                KBH students and vice-versa, unless accompanied by teachers or school staff.
                                <br /><br />
                                Use of shared non-academic facilities (such as the football pitch or swimming pool) will
                                be carefully managed to ensure safety during school hours. Separate schedules and
                                designated areas will be established to maintain a distinct experience for KBH students.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="nurse">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                20. Is there a nurse's room?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                Yes, a nurse's room will be available.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="traffic">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                21. How will traffic, drop-off, and pick-up be managed? Will this be shared with Pichayasuksa?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                A separate drop-off and pick-up point will be implemented for KBH and Pichayasuksa
                                students. In addition, school schedules will be managed to ensure smooth traffic flow
                                during peak hours. Traffic congestion will also be minimized through staggered
                                timings, clear signage, and dedicated traffic police support.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="school-hours">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                22. What are the school start and end hours for each year? Is ECA available?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                The school day will run from 8am to 4pm for each year. A variety of Extra-Curricular
                                Activities (ECA) will be available and run until 5pm, allowing students to explore
                                interests beyond academics.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="communication">
                            <AccordionTrigger className="font-bold text-lg sm:text-xl text-left">
                                23. How will communication with parents be managed?
                            </AccordionTrigger>
                            <AccordionContent className="sm:text-lg">
                                We will use LINE Official and other popular communication platforms that parents find
                                convenient such as Facebook, for timely updates, announcements, and individual
                                communication.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
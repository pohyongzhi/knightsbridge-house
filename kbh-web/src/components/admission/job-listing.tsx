import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function JobListings() {
    return (
        <div className="space-y-4">
            {/* HR and Administrative Manager Popover */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <div>
                            <div className="font-semibold">HR and Administrative Manager</div>
                            <div className="text-sm text-muted-foreground">Click to view details</div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[800px] p-6" align="start">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">HR and Administrative Manager</h3>
                        <p className="text-sm text-gray-600">
                            Seeking a HR and Administrative Manager, fluent in English and Thai, with past experience working in the education industry and familiar with managing working visas for foreign teachers and students.
                        </p>

                        {/* HR Duties */}
                        <div>
                            <h4 className="font-medium mb-2">HR Duties & Responsibilities:</h4>
                            <div className="ml-4 space-y-4">
                                <div>
                                    <h5 className="font-medium mb-1">Recruitment</h5>
                                    <ul className="list-disc ml-4 text-sm space-y-1">
                                        <li>Post job vacancies on the company website, LinkedIn and online job portals and channels</li>
                                        <li>Head Hunt candidates through internet sources, referrals</li>
                                        <li>Screen candidates resume</li>
                                        <li>Arrange interviews with candidates</li>
                                        <li>Prepare and send job offers and employment contracts</li>
                                        <li>Conduct reference checks on candidates and their certificates before employment</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-1">Management</h5>
                                    <ul className="list-disc ml-4 text-sm space-y-1">
                                        <li>Ensure teachers complete the safeguarding in-education course</li>
                                        <li>Manage the biometric attendance system</li>
                                        <li>Organize and maintain employee personnel records</li>
                                        <li>Administer the HR leave application system</li>
                                        <li>Processing monthly payroll and social security submissions</li>
                                        <li>Handling work visa applications, renewals, and cancellations</li>
                                        <li>Manage the Company and Student insurance matters</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Administration Duties */}
                        <div>
                            <h4 className="font-medium mb-2">Administration Duties & Responsibilities:</h4>
                            <div className="ml-4 space-y-4">
                                <div>
                                    <h5 className="font-medium mb-1">Company Administration</h5>
                                    <ul className="list-disc ml-4 text-sm space-y-1">
                                        <li>Appointed as Environmental Control Coordinator</li>
                                        <li>Oversee school maintenance and coordinate with contractors</li>
                                        <li>Manage school purchases and sourcing suppliers</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-1">IT Administration</h5>
                                    <ul className="list-disc ml-4 text-sm space-y-1">
                                        <li>Appointed as Data Protection Officer</li>
                                        <li>Ensure compliance with PDPA</li>
                                        <li>Setup of school email addresses for staff</li>
                                        <li>Oversee the maintenance of school's IT equipment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            {/* Admissions and Marketing Officer Popover */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <div>
                            <div className="font-semibold">Admissions and Marketing Officer</div>
                            <div className="text-sm text-muted-foreground">Click to view details</div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[800px] p-6" align="start">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Admissions and Marketing Officer</h3>

                        <div>
                            <h4 className="font-medium mb-2">Job Overview</h4>
                            <p className="text-sm text-gray-600">
                                We are seeking a dynamic and enthusiastic Admissions and Marketing Officer to join our team. The successful candidate will play a crucial role in driving our school's enrolment and enhancing its visibility within the local and international community.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">Key Responsibilities</h4>
                            <div className="ml-4 space-y-4">
                                {/* Admissions */}
                                <div>
                                    <h5 className="font-medium mb-1">Admissions</h5>
                                    <ul className="list-disc ml-4 text-sm space-y-1">
                                        <li>Develop and implement comprehensive admissions strategies</li>
                                        <li>Manage the entire admissions process</li>
                                        <li>Conduct school tours and information sessions</li>
                                        <li>Maintain accurate records of prospective students</li>
                                    </ul>
                                </div>

                                {/* Marketing */}
                                <div>
                                    <h5 className="font-medium mb-1">Marketing</h5>
                                    <ul className="list-disc ml-4 text-sm space-y-1">
                                        <li>Develop and execute marketing plans and campaigns</li>
                                        <li>Create engaging content for various marketing channels</li>
                                        <li>Collaborate with the school's leadership team</li>
                                        <li>Monitor and analyse marketing campaign effectiveness</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">Qualifications</h4>
                            <ul className="list-disc ml-4 text-sm space-y-1">
                                <li>Bachelor's degree in Marketing, Business Administration, or related field</li>
                                <li>Experience in admissions or marketing within an international school setting</li>
                                <li>Strong understanding of digital marketing strategies</li>
                                <li>Excellent communication skills in English and Thai (Mandarin is an advantage)</li>
                                <li>Proficiency in Microsoft Office Suite and CRM systems</li>
                            </ul>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
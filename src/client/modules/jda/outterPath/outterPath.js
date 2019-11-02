import '@lwc/synthetic-shadow';
import { LightningElement, api, track } from 'lwc';

export default class OutterPath extends LightningElement {
    @api codeNumber = '';
    @api displayStepModal = false;
    data = [
        {
            opportunityId: '187376',
            companyName: 'FEMSA',
            phase: 'deploy',
            weeksInPhase: '5 weeks',
            dueDatePhase: '15-Nov-19',
            involvedParties: [
                {
                    name: 'PM: Andrea Tamez',
                    id: 'andreaTamez'
                },
                {
                    name: 'CP: Luis Carlos González Horta',
                    id: 'luisCarlosGonzálezHorta'
                },
                {
                    name: 'SA: Athulya Swaminathan',
                    id: 'athulyaSwaminathan'
                },
                {
                    name: 'TA: Venkata Pavan Dirisala',
                    id: 'venkataPavanDirisala'
                },
                {
                    name: 'COL: Celso Ramirez',
                    id: 'celsoRamirez'
                },
                {
                    name: 'PMO: Marcos Hernandez',
                    id: 'marcosHernandez'
                }
            ],
            phaseGoals: [
                ' Finalize Deployment Plan',
                'Finalize the transition to GCS Document',
                'Create the Post Go-Live Support Issue Tracker',
                'Go-Live',
                'All documentadion and signature emails uploaded to JCES'
            ],
            keyDeliverables: [
                'Phase Sign off',
                'Prepare Go-Live Checklist',
                'Issue Tracker',
                'Deployment Plan'
            ],
            availability: '15-Nov-19',
            riskTracker: 'GREEN'
        },
        {
            opportunityId: '177459',
            companyName: 'ICON 7 Eleven',
            phase: 'design',
            weeksInPhase: '22 weeks',
            dueDatePhase: 'Nov-19',
            involvedParties: [
                {
                    name: 'PM: Ana Borbolla',
                    id: 'anaBorbolla'
                },
                {
                    name: 'CP: Antonio Salinas',
                    id: 'antonioSalinas'
                },
                {
                    name: 'SA: Celso Danezi',
                    id: 'celsoDanezi'
                },
                {
                    name: 'BC: Berenice García',
                    id: 'bereniceGarcía'
                },
                {
                    name: 'BC: Daniel Ulloa',
                    id: 'danielUlloa'
                },
                {
                    name: 'TC: Oscar Ríos',
                    id: 'oscarRíos'
                },
                {
                    name: 'EM: Diane Durden',
                    id: 'dianeDurden'
                },
                {
                    name: 'COL: Ana Salinas',
                    id: 'anaSalinas'
                }
            ],
            phaseGoals: [
                'Create CS Environment',
                'Create BPR',
                'Solution Design Workshops',
                'Define JDA Customer-Data Transfer (Cloud Infra) and Procedures',
                'Design base JDA interfaces',
                'Review and design approved',
                'Engage Development Services Process',
                'Hardware requirements confirmation',
                'Conduct Functional and Technical Project Team Training'
            ],
            keyDeliverables: [
                'Environment',
                'BPR Sign off',
                'Functional/Design Documents',
                'Requirements and Tracability Matrix',
                'Sign Off from Strategic Consultant and Solution Architect for the Design Review',
                'Protocols and Procedures Document',
                'Initial Draft the Your -installation Architecture and Configuration Management Document',
                'Define POC Business Requirements Criteria',
                'Execute POC',
                'Sign Off by Customer Solution Design',
                'Sign Off Technical Design by Customer',
                'Sign off on CR additional work'
            ],
            availability: '1-Sep-20',
            riskTracker: 'YELLOW'
        },
        {
            opportunityId: '186834',
            companyName: 'TYSON',
            phase: 'deploy',
            weeksInPhase: '6 weeks',
            dueDatePhase: '3 weeks',
            involvedParties: [
                {
                    name: 'PM: Denise Parker',
                    id: 'deniseParker'
                },
                {
                    name: 'CP: Mike Reese',
                    id: 'mikeReese'
                },
                {
                    name: 'SA: Bill Benedict',
                    id: 'billBenedict'
                },
                {
                    name: 'BC: Armanbir Ahluwalia',
                    id: 'armanbirAhluwalia'
                },
                {
                    name: 'TA: Anilkumar Matassery',
                    id: 'anilkumarMatassery'
                },
                {
                    name: 'TC: Venkatesh Kattamanchi',
                    id: 'venkateshKattamanchi'
                },
                {
                    name: 'PMO: Dave Carlson',
                    id: 'daveCarlson'
                }
            ],
            phaseGoals: [
                'Finalize Deployment Plan',
                'Finalize the transition to GCS Document',
                'Create the Post Go-Live Support Issue Tracker',
                'Go-Live',
                'All documentadion and signature emails uploaded to JCES'
            ],
            keyDeliverables: [
                'Phase Sign off',
                'Prepare Go-Live Checklist',
                'Issue Tracker',
                'Deployment Plan'
            ],
            availability: 'Mid-2021',
            riskTracker: 'GREEN'
        },
        {
            opportunityId: '188927',
            companyName: 'CEMEX',
            phase: 'validate',
            weeksInPhase: '8 weeks',
            dueDatePhase: '3 days',
            involvedParties: [
                {
                    name: 'PM: Alejandro Rodriguez',
                    id: 'alejandroRodriguez'
                },
                {
                    name: 'CP: Antonio Salinas',
                    id: 'antonioSalinas'
                },
                {
                    name: 'SA: Dan Nienhuis',
                    id: 'danNienhuis'
                },
                {
                    name: 'BC: Cristina Romero',
                    id: 'cristinaRomero'
                },
                {
                    name: 'TC: Lopamudra Das',
                    id: 'lopamudraDas'
                },
                {
                    name: 'EM: Diane Durden',
                    id: 'dianeDurden'
                },
                {
                    name: 'COL: Celso Ramirez',
                    id: 'celsoRamirez'
                },
                {
                    name: 'PMO: Guillermo Gil',
                    id: 'guillermoGil'
                }
            ],
            phaseGoals: [
                'Conduct SIT Tests',
                'UA Training',
                'UAT Test',
                'Create Deployment Plan',
                'Validate documents, signatures, emails uploaded to jCES'
            ],
            keyDeliverables: [
                'Test Results Acceptance (SIT, UAT, Purging and Archiving, UI/Batch Peformance)',
                'Business Requiremets and Traceability Matrix Transition to Global Support Services document',
                'Phase Sign Off',
                'Go-Live Protocols & Procedures Document'
            ],
            availability: 'Mid-2020',
            riskTracker: 'GREEN'
        },
        {
            opportunityId: '204192',
            companyName: 'Drogaria Araujo',
            phase: 'design',
            weeksInPhase: '0',
            dueDatePhase: '7 weeks',
            involvedParties: [
                {
                    name: 'PM: Violeta Cortés',
                    id: 'violetaCortes'
                },
                {
                    name: 'CP: Antonio Salinas',
                    id: 'antonioSalinas'
                },
                {
                    name: 'SA: Manuel Ortega (Partner)',
                    id: 'manuelOrtega'
                },
                {
                    name: 'BC: Tiago Stoliar Mandu (Partner)',
                    id: 'tiagoStoliarMandu'
                },
                {
                    name: 'TC: Luis Cornejo',
                    id: 'luisCornejo'
                },
                {
                    name: 'EM: Diane Durden',
                    id: 'dianeDurden'
                },
                {
                    name: 'COL: Rogelio Castillo',
                    id: 'rogelioCastillo'
                },
                {
                    name: 'Customer PM: Carlos Eduardo Carvlho de Andrade',
                    id: 'carlosEduardoCarvlhoDeAndrade'
                },
                {
                    name: 'Customer Business: Livia Luzia de Menezes',
                    id: 'liviaLuziaDeMenezes'
                },
                {
                    name: 'Customer IT: Mateus Amaral',
                    id: 'mateusAmaral'
                },
                {
                    name: 'PMO: Mariana Amarante Andrade',
                    id: 'marianaAmaranteAndrade'
                }
            ],
            phaseGoals: [
                'Create CS Environment',
                'Create BPR',
                'Solution Design Workshops Define JDA Customer-Data Transfer (Cloud Infra) and Procedures',
                'Design base JDA interfaces',
                'Review and design approved',
                'ngage Development Services Process',
                'Hardware requirements confirmation',
                'Conduct Functional and Technical Project Team Training'
            ],
            keyDeliverables: [
                'Environment',
                'BPR Sign off',
                'Functional/Design Documents',
                'Requirements and Tracability Matrix',
                'Sign Off from Strategic Consultant and Solution Architect for the Design Review',
                'Protocols and Procedures Document',
                'Initial Draft the Your -installation Architecture and Configuration Management Document',
                'Define POC Business Requirements Criteria',
                'Execute POC',
                'Sign Off by Customer Solution Design',
                'Sign Off Technical Design by Customer',
                'Sign off on CR additional work'
            ],
            availability: '8-Jun-20',
            riskTracker: 'GREEN'
        }
    ];
    contactData = [
        {
            id: 'andreaTamez',
            name: 'Andrea Tamez',
            jobTitle: 'Project Coordinator',
            timeInPosition: '0.8',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'luisCarlosGonzalezHorta',
            name: 'Luis Carlos Gonzalez Horta',
            jobTitle: 'Sr. Delivery Partner',
            timeInPosition: '1.11',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'athulyaSwaminathan',
            name: 'Athulya Swaminathan',
            jobTitle: 'Sr. Business Consultant',
            timeInPosition: '1.3',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'venkataPavanDirisala',
            name: 'Venkata Pavan Dirisala',
            jobTitle: 'Contractor',
            timeInPosition: null,
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'anaBorbolla',
            name: 'Ana Borbolla',
            jobTitle: 'Project Manager Int.',
            timeInPosition: '1.4',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'antonioSalinas',
            name: 'Antonio Salinas',
            jobTitle: 'Delivery Partner',
            timeInPosition: '0.4',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'celsoDanezi',
            name: 'Celso Danezi',
            jobTitle: 'Enterprise Solution Architect',
            timeInPosition: '8.6',
            phases: ['prepare', 'design', 'construct', 'validate', 'deploy']
        },
        {
            id: 'bereniceGarcía',
            name: 'Berenice García',
            jobTitle: 'Business Consultant Int.',
            timeInPosition: '0.9',
            phases: ['design', 'construct', 'validate', 'deploy']
        },
        {
            id: 'danielUlloa',
            name: 'Daniel Ulloa',
            jobTitle: 'Sr. Business Consultant',
            timeInPosition: '1.3',
            phases: ['design', 'construct', 'validate', 'deploy']
        },
        {
            id: 'oscarRíos',
            name: 'Oscar Ríos',
            jobTitle: 'Sr. Technical Consultant',
            timeInPosition: '0.3',
            phases: ['design', 'construct', 'validate', 'deploy']
        },
        {
            id: 'dianeDurden',
            name: 'Diane Durden',
            jobTitle: 'Education Manager',
            timeInPosition: '0.7',
            phases: ['prepare']
        },
        {
            id: 'deniseParker',
            name: 'Denise Parker',
            jobTitle: 'Sr. Project Manager',
            timeInPosition: '3.4',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'mikeReese',
            name: 'Mike Reese',
            jobTitle: 'Global Services Director',
            timeInPosition: '5.6',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'billBenedict',
            name: 'Bill Benedict',
            jobTitle: 'Solution Architect',
            timeInPosition: '1.8',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'armanbirAhluwalia',
            name: 'Armanbir Ahluwalia',
            jobTitle: 'Business Consultant Int.',
            timeInPosition: '0.3',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'venkateshKattamanchi',
            name: 'Venkatesh Kattamanchi',
            jobTitle: 'Technical Architect',
            timeInPosition: '0.3',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'alejandroRodríguez',
            name: 'Alejandro Rodríguez',
            jobTitle: 'Project Manager',
            timeInPosition: '0.9',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'danNienhuis',
            name: 'Dan Nienhuis',
            jobTitle: 'Sr. Solution Architect',
            timeInPosition: '1.1',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'cristinaRomero',
            name: 'Cristina Romero',
            jobTitle: 'Sr. Business Consultant',
            timeInPosition: '1.4',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'lopamudraDas',
            name: 'Lopamudra Das',
            jobTitle: 'Sr. Technical Consultant',
            timeInPosition: '2.3',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'violetaCortes',
            name: 'Violeta Cortés',
            jobTitle: 'Project Manager',
            timeInPosition: '0.3',
            phases: [
                'provisioning',
                'prepare',
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'luisCornejo',
            name: 'Luis Cornejo',
            jobTitle: 'Technical Architect',
            timeInPosition: '0.3',
            phases: [
                'design',
                'construct',
                'validate',
                'deploy',
                'transition',
                'goLive'
            ]
        },
        {
            id: 'rogelioCastillo',
            name: 'Rogelio Castillo',
            jobTitle: 'Project Manager Int. (Cloud-Onboarding)',
            timeInPosition: '3.9',
            phases: ['cloudOnboarding', 'hypercare', 'transition', 'goLive']
        },
        {
            id: 'celsoRamirez',
            name: 'Celso Ramirez',
            jobTitle: 'Project Manager Int. (Cloud-Onboarding)',
            timeInPosition: '1.3',
            phases: ['cloudOnboarding', 'hypercare', 'transition', 'goLive']
        },
        {
            id: 'anaSalinas',
            name: 'Ana Salinas ',
            jobTitle: 'Project Manager (Cloud-Onboarding)',
            timeInPosition: '0.8',
            phases: ['cloudOnboarding', 'hypercare', 'transition', 'goLive']
        }
    ];
    @api step = '';
    @track selectedContact = '';
    @track displayPhasesToast = false;
    @track displayContactToast = false;
    @track phasesToastMessage = '';
    @track contactToastMessage = '';

    connectedCallback() {
        this.step = this.data.find(x => x.opportunityId === this.codeNumber);
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        window.setTimeout(
            function() {
                this.displayStepModal = true;
            }.bind(this),
            2000
        );
    }

    renderedCallback() {
        let steps = this.template.querySelectorAll('.slds-path__item');
        let stepsArray = Array.from(steps);
        if (this.step !== undefined && this.step !== '' && this.step !== null) {
            let stepLi = stepsArray.find(
                x => x.dataset.identifier === this.step.phase
            );
            stepLi.classList.add('slds-is-current');
        }
    }

    handleDisplayStepModal(e) {
        let selectedPath = e.currentTarget.dataset.identifier;
        if (selectedPath === this.step.phase) {
            this.displayStepModal = true;
        }
    }

    handleCloseStepModal() {
        this.displayStepModal = false;
    }

    handleSelectedContact(e) {
        let contactId = e.detail;
        this.selectedContact = this.contactData.find(
            contact => contact.id === contactId
        );
        //
        if (this.selectedContact) {
            this.displayStepModal = false;
            this.displayContactToast = true;
            this.contactToastMessage = `${this.selectedContact.name} - ${this.selectedContact.jobTitle}. ${this.selectedContact.timeInPosition} years in position`;
            this.displayPhasesToast = true;
            this.phasesToastMessage = `${this.selectedContact.name} participates in the selected phases:`;
            //
            let steps = this.template.querySelectorAll('.slds-path__item');
            let stepsArray = Array.from(steps);
            let stepsWithContact = stepsArray.filter(step =>
                this.selectedContact.phases.includes(step.dataset.identifier)
            );
            stepsWithContact.forEach(step =>
                step.classList.add('is-participant')
            );
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            window.setTimeout(
                function() {
                    this.displayPhasesToast = false;
                    this.displayContactToast = false;
                    stepsWithContact.forEach(step =>
                        step.classList.remove('is-participant')
                    );
                }.bind(this),
                10000
            );
        } else {
            this.displayContactToast = true;
            this.displayPhasesToast = true;
            this.contactToastMessage = `The selected contact does not appear to have any more related phases`;
            this.phasesToastMessage = `Select another contact`;
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            window.setTimeout(
                function() {
                    this.displayContactToast = false;
                    this.displayPhasesToast = false;
                }.bind(this),
                5000
            );
        }
    }

    handleOnClosePhasesToast() {
        this.displayPhasesToast = false;
    }

    handleOnCloseContactToast() {
        this.displayContactToast = false;
    }
}

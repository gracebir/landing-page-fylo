import { Tservice, Ttestimonial } from '../../type'
import anywhere from '../assets/icon-access-anywhere.svg'
import anyfile from '../assets/icon-any-file.svg'
import colab from '../assets/icon-collaboration.svg'
import security from '../assets/icon-security.svg'

import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'

export const services: Array<Tservice> = [
    {
        id: 1,
        title: "Access your files, anywhere",
        desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        img: anywhere
    },
    {
        id: 2,
        title: "Security you can trust",
        desc: `2-factor authentication and user-controlled encryption are just a couple of the security 
        features we allow to help secure your files.`,
        img: security
    },
    {
        id: 3,
        title: "Real-time collaboration",
        desc: `Securely share files and folders with friends, family and colleagues for live collaboration. 
        No email attachments required.`,
        img: colab
    },
    {
        id: 4,
        title: "Store any type of file",
        desc: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.`,
        img: anyfile
    }
]

export const userTestimonials: Array<Ttestimonial> = [
    {
        id: 1,
        fullname: 'Satish Patel',
        img: profile1
    },
    {
        id: 2,
        fullname: 'Bruce McKenzie',
        img: profile2
    },
    {
        id: 3,
        fullname: 'Iva Boyd',
        img: profile3
    }
]
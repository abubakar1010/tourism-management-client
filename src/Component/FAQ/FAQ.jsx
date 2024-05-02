import React from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
   
const FAQ = () => {
    function Icon({ id, open }) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        );
      }
       
      const [open, setOpen] = React.useState(0);
     
      const handleOpen = (value) => setOpen(open === value ? 0 : value);
     
    return (
        <div>
            <h1 className=" text-xl font-bold mb-4 mt-6">FAQ</h1>

<div>
<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
  <AccordionHeader onClick={() => handleOpen(1)}>Transportation & arrival information</AccordionHeader>
  <AccordionBody>
  Round-trip flights booked through Go Ahead Tours arrive in Lyon and depart from Paris. A representative from Go Ahead Tours will meet you at the airport and take you to your hotel. Please remain in the arrival lounge, as the representative might be escorting one of your fellow travelers to the bus at the time of your arrival.
  </AccordionBody>
</Accordion>

<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
  <AccordionHeader onClick={() => handleOpen(2)}>
    Baggage Allowance
  </AccordionHeader>
  <AccordionBody>
  Please note that our travelers are limited to one checked bag and one carry-on bag per person due to storage limitations on motor coaches and other transfers, which may include train connections or flights.
  </AccordionBody>
</Accordion>
<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
  <AccordionHeader onClick={() => handleOpen(3)}>
    Health
  </AccordionHeader>
  <AccordionBody>
  At least 60 days prior to departure, check with your doctor or healthcare provider for the latest updates and entry requirements, or visit the Center for Disease Control and Prevention website at cdc.gov.
  </AccordionBody>
</Accordion>
<Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
  <AccordionHeader onClick={() => handleOpen(4)}>
  Clothing & packing tips
  </AccordionHeader>
  <AccordionBody>
  
  <ul className=" list-disc space-y-2 pl-4">
      <li>We recommend packing lightweight, loose-fitting clothing that can be easily layered to accommodate varying temperatures, as well as a light jacket or rainwear.</li>
      <li>A sturdy pair of walking shoes or sneakers is recommended for sightseeing.</li>
      <li>You may want to pack dressier attire if you plan to visit a high-end restaurant or attend a special performance.</li>
      <li>It is preferable not to visit churches or other religious sites with bare legs and shoulders (and entrance may be denied on this basis).</li>
    </ul>
  </AccordionBody>
</Accordion>
<Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
  <AccordionHeader onClick={() => handleOpen(5)}>Passport, visa & entry requirements</AccordionHeader>
  <AccordionBody>
  Passport holders from over 60 visa-exempt countries (including the U.S. and Canada) will need to apply for an ETIAS travel authorization in order to visit 30 European countries. That means that even if you’ve previously traveled to any of these European countries without a visa, starting in 2025, you will need to get ETIAS authorization to visit them again.
  </AccordionBody>
</Accordion>
</div>

        </div>
    );
};

export default FAQ;
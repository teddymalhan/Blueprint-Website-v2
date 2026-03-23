import React, {useState} from "react";
import PageContainer from "../components/layout/PageContainer";
import Filters, {filterStatus} from "../components/shared/Filters";
import MemberCard, {memberRoleType} from "../components/shared/MemberCard";

const AlumniPage = () => {
  // Placeholder type meant to emualte how data may be stored
  type memberCardData = {
    name: string;
    role: string;
    roleType?: memberRoleType;
    photoUrl?: string;
    linkedinUrl?: string;
  }

  const roleTofilterMap: Record< memberRoleType, string> = {
    "designer": "designer",
    "pm":  "project managers",
    "dev": "developers",
    "exec": "executives" ,
    "techLead": "tech leads"
  }

  // Emulation of data storage
  const memberData: memberCardData[] = [
    {name: "Firstname Lastname", role: "Designer", roleType: "designer", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Birstname Lastname", role: "project manager", roleType: "pm", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Airstname Lastname", role: "developer", roleType: "dev", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Birstname Lastname", role: "executive", roleType: "exec", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Secret Name1", role: "tech lead", roleType: "techLead", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Short Name", role: "Designer", roleType: "designer", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Hhort Name", role: "project manager", roleType: "pm", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Thort Name", role: "developer", roleType: "dev", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Chort Name", role: "executive", roleType: "exec", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    {name: "Secret Name2", role: "tech lead", roleType: "techLead", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
  ]

  // TODO: Occur once when data is loaded or not all if data comes sorted alphabetically
  memberData.sort((val1, val2) => {
    if (val1.name > val2.name){
      return 1;
    }
    else if (val1.name < val2.name) {
      return -1;
    }
    return 0;
  })

  const [filterState, setFilterState] = useState<string>("all");
  // Sets MemberCard rotation to be randomized within a set of values or fixed +5deg
  const enableRandomRotation: boolean = true;
  
  const handleFilterClick = (title: string) => {
    (title == filterState) ? setFilterState("all") : setFilterState(title);
  }

  return (
  <PageContainer className="bg-blueprint-gray-lightest items-center flex-col flex">
    {/* Hero Section */}
    <section className="flex items-center flex-col tablet:mt-[39px] tablet:mb-[69px] mt-[31px] mb-[44px]">
      <h1 className="decoration-[#2E2E2E] font-poppins font-normal text-center tablet:mb-[28px] tablet:text-[48px]/[120%] tablet:tracking-[-0.96px] mb-[30px] text-[28px]/[120%] tracking-[-0.56px]">
        thank you, sfu blueprint alumni!
      </h1>
      <p className="font-caveat  text-center max-w-[786px] font-normal tablet:decoration-blueprint-black tablet:mb-[81px] tablet:text-[32px]/[170%] mb-[61px] decoration-black text-[24px]/[170%]">
        The impact you've created, for our projects and our community, continues to define who we are as a team.
      </p>
      {/* Filter buttons */}
      <div className="flex flex-wrap flex-row desktop:gap-x-[14px] gap-[6px] justify-center max-[501px]:w-auto max-[885px]:w-[max(500px)]"> 
        { /* Maps filterState and filter titles to Filters components */
          (Object.values(roleTofilterMap)).map((title) => {
            if (title === "all") {
              return <></>
            }
           
            let status: filterStatus = "outlined";
            if (title === filterState) {
              status = "active";
            }
            else if (filterState === "all") {
              status = "filled"
            }
          
            return <Filters title={title} key={title} state={status} onClick={() => handleFilterClick(title)}/>;
        })};
        
      </div>
    </section>

    {/* Alumni */}
    <section className=
    {`grid gap-[10px] pb-[100px] grid-cols-2 w-full self-center justify-items-center
      min-[629.9px]:grid-cols-3
      tablet:gap-[20px] tablet:grid-cols-2 
      min-[810px]:grid-cols-3 
      min-[1056px]:grid-cols-4 `}>
      {
        /*  
          Adds each member to the page according to current filter status using the MemberCard component.
          - Assumes that array is static
        */
        memberData.map((member: memberCardData)=>{
          if ((filterState !== "all") && (filterState !== roleTofilterMap[member.roleType])) {
            return <></>;
          }
          else if ((filterState !== "tech leads") && ("techLead" === member.roleType)) {
            return <></>;
          }
          else{
            return (
              <MemberCard 
                name={member.name} 
                role={member.role} 
                roleType={member.roleType} 
                photoUrl={member.photoUrl} 
                linkedinUrl={member.linkedinUrl} 
                randomRotation={enableRandomRotation}/>
            );
          }
        })
      }
    </section>
  </PageContainer>);
};

export default AlumniPage;
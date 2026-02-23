import React, { useEffect } from 'react'
import MustardSinglePro from '../../component/mustardsinglepro/MustardSinglePro';
import { Helmet } from 'react-helmet';
import MildMustardsinglepro from '../../component/mildmustardsinglepro/MildMustardsinglepro';

const MildMustard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Helmet>
      <title>Vishwas Refoils | Filtered Mild Mustard Oil </title>
    </Helmet>
    <div>
      {/* <HeroSunflower /> */}
      <MildMustardsinglepro />
    </div>
  </>
  )
}

export default MildMustard
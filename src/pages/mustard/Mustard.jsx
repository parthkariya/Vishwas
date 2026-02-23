import React, { useEffect } from 'react'
import MustardSinglePro from '../../component/mustardsinglepro/MustardSinglePro';
import { Helmet } from 'react-helmet';

const Mustard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Helmet>
      <title>Vishwas Refoils | Refined Mustard Oil </title>
    </Helmet>
    <div>
      {/* <HeroSunflower /> */}
      <MustardSinglePro />
    </div>
  </>
  )
}

export default Mustard
import React, { useEffect } from 'react'
import MustardSinglePro from '../../component/mustardsinglepro/MustardSinglePro';
import { Helmet } from 'react-helmet';
import RiceBarnSingPro from '../../component/ricebarnsingpro/RiceBarnSingPro';

const RiceBarn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Helmet>
      <title>Vishwas Refoils | Refined Rice Bran Oil </title>
    </Helmet>
    <div>
      {/* <HeroSunflower /> */}
      <RiceBarnSingPro />
    </div>
  </>
  )
}

export default RiceBarn
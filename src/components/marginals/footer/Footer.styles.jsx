import styled from 'styled-components'
import tw from 'twin.macro'

export const Footer = styled.div`
  ${tw`
    h-[774px] xmd:h-[283px] 2xmd:h-[299.5px] 1.5xl:h-[483px] bg-brown-4 font-Poppins flex flex-col justify-between  
  `}
`

export const FooterTop = styled.div`
  ${tw`
    px-[24px] pt-[23px] pb-[49px] xmd:h-[265.5px] 1.5xl:h-[400.3px] 2xl:px-[39px] 1.5xl:py-[48px] 2xl:py-[64px] flex justify-between flex-col gap-[47px] xmd:flex-row xmd:gap-[0px]
  `}
`

export const Logos = styled.div`
  ${tw`
    h-[129.15px] 2xl:h-[306px] 2xl:w-[461.44px] mt-[10px] xmd:mt-0 flex-col text-brown-2 order-2 xmd:order-1  
  `}
`

export const SocialLogo = styled.div`
  ${tw`
    h-[48px] 1.5xl:mb-[146px]
  `}
`

export const SocialLogoIndv = styled.div`
  ${tw`
    w-[105px] h-[21.98px] 1.5xl:w-[229.37px] 1.5xl:h-[48px] flex justify-between items-center gap-[5.7px] 2xl:gap-[12.45px]
  `}
`

export const SocialImg = styled.img`
  ${tw`
    h-[21px] w-[21px] 1.5xl:h-[48px] 1.5xl:w-[48px]
  `}
`

export const MainLogo = styled.div`
  ${tw`
    h-[67.16px] w-[262.04px] 2xl:h-[112.38px] 2xl:w-full flex items-end gap-[20.32px] xmd:gap-[15.5px] 2xl:gap-[57px]
  `}
`

export const AicheLogo1 = styled.img`
  ${tw`
    w-[161.71px] h-[44.44px] xmd:w-[150px] xmd:h-[41.21px] 1.5xl:w-[230.58px] 1.5xl:h-[63.38px] 2xl:w-[270.58px] 2xl:h-[74.36px]
  `}
`

export const AicheLogo2 = styled.img`
  ${tw`
    w-[80px] h-[67.16px] xmd:w-[75px] xmd:h-[62.26px] 1.5xl:w-[110.86px] 1.5xl:h-[93.07px] 2xl:w-[133.86px] 2xl:h-[112.38px]
  `}
`

export const Text = styled.div`
  ${tw`
    flex flex-col xmd:flex-row gap-[45px] xmd:gap-[20px] 2xmd:gap-[50px] 1.5xl:gap-[122px] justify-between h-[472px] xxsm:w-[382px] xmd:h-auto xmd:w-auto 1.5xl:h-[306px] 1.5xl:w-[853.83px] order-1 xmd:order-2 tracking-widest
  `}
`

export const Heading = styled.h4`
  ${tw`
    mb-[16px] 1.5xl:mb-[32px] text-brown-3 font-semibold text-[17px] xmd:text-[15px] 2xmd:text-[20px] 1.5xl:text-[32px] 
  `}
`

export const List = styled.ul`
  ${tw`
    text-[12px] xmd:text-[10px] 2xmd:text-[12.5px] 1.5xl:text-[18px] font-medium text-brown-2
  `}
`

export const ListItems = styled.li`
  ${tw`
    mb-[16px]
  `}
  &:last-child {
    ${tw`mb-0`}
  }
`

export const FooterBottom = styled.div`
  ${tw`
    px-[12px] 1.5xl:px-[34px] py-[2px] 1.5xl:py-[27.65px] h-[32px] 2xmd:h-[34px] 1.5xl:h-[82.7px] flex gap-[9px] 1.5xl:gap-[41px] 2xmd:gap-[18px] bg-brown-5 text-brown-1 items-center justify-evenly xmd:justify-start text-[7.5px] xxsm:text-[9px] 1.5xl:text-[18px] font-medium
  `}
`

export const MadeBy = styled.p`
  ${tw`
    flex justify-center items-center gap-[2px] 1.5xl:gap-[4px]
  `}
`

export const HeartIcon = styled.img`
  ${tw`
    w-[9.88px] h-[9.88px] 1.5xl:w-[18px] 1.5xl:h-[18px]
  `}
`
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Heading from '../Heading'
import Image from '../Image'
import Badge from '../Badge'
import Price from '../Price'
import { FiPlus } from "react-icons/fi";
import Flex from '../Flex';
import { PiControlFill } from "react-icons/pi";
import { LuLayoutGrid } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";
import Love from '../icons/Love'
import Roted from '../icons/Roted'
import Troli from '../icons/Troli'
import { BsThreeDots } from "react-icons/bs";


const Product = ({pot, headphone, table, cap, clock3, bag2, sunglass,  potOffer, vasket,Clock1, headphoneOffer, clock3Offer, sunglassOff, tableOffer, capOffer}) => {
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
            <div className="mb-[130px]">
                <Header text="Products"/>
            </div>
           <Flex className="gap-x-[39px]">
             <div className="">
              <div className="w-[372px] mb-[53px]">
                <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[35px]" text="Shop by Category" as="h3"/>
                <ul className=''>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center justify-between pb-[19px] mb-[20px]">
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Category 1</a></li>
                  <div className=""><FiPlus className='text-[20px] font-bold text-[#767676]'/></div>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center justify-between pb-[19px] mb-[20px]">
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Category 2</a></li>
                  <div className=""><FiPlus className='text-[20px] font-bold text-[#767676]'/></div>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center justify-between pb-[19px] mb-[20px]">
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Category 3</a></li>
                  <div className=""><FiPlus className='text-[20px] font-bold text-[#767676]'/></div>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center justify-between pb-[19px] mb-[20px]">
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Category 4</a></li>
                  <div className=""><FiPlus className='text-[20px] font-bold text-[#767676]'/></div>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center justify-between pb-[19px] mb-[20px]">
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Category 5</a></li>
                  <div className=""><FiPlus className='text-[20px] font-bold text-[#767676]'/></div>
                 </Flex>
                </ul>
              </div>

              <div className="w-[372px] mb-[53px]">
                <Flex className="justify-between">
                  <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[35px]" text="Shop by Color" as="h3"/>
                  <PiControlFill className='mt-[10px]'/>
                </Flex>

                <ul className=''>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#000000] mt-[8px]"></div>
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Color 1</a></li>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#FF8686] mt-[8px]"></div>
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Color 1</a></li>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#7ED321] mt-[8px]"></div>
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Color 1</a></li>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#B6B6B6] mt-[8px]"></div>
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Color 1</a></li>
                 </Flex>
                 <Flex className="border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#15CBA5] mt-[8px]"></div>
                  <li className=' font-DM font-regular text-[16px] text-[#767676]'><a href="#">Color 1</a></li>
                 </Flex>
                </ul>
              </div>

              <div className="w-[372px] mb-[53px]">
                <Flex className="justify-between">
                  <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[35px]" text="Shop by Brand" as="h3"/>
                  <PiControlFill className='mt-[10px]'/>
                </Flex>

                <ul className=''>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">Brand  1</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">Brand  2</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">Brand  3</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">Brand  4</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">Brand  5</a></li>
                </ul>
              </div>
              <div className="w-[372px]">
                <Flex className="justify-between">
                  <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[35px]" text="Shop by Price" as="h3"/>
                  <PiControlFill className='mt-[10px]'/>
                </Flex>

                <ul className=''>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">$0.00 - $9.99</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">$10.00 - $19.99</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">$20.00 - $29.99</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">$30.00 - $39.99</a></li>
                  <li className=' font-DM font-regular text-[16px] text-[#767676] border-b-2 border-[#F0F0F0] align-center pb-[19px] mb-[20px] gap-x-[10px]'><a href="#">$40.00 - $59.99</a></li>
                </ul>
              </div>
             </div>
             <div className="">
              <Flex className="gap-x-[180px]">
                <Flex className="pt-[15px] gap-x-[20px]">
                  <div className="p-[9px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-white">
                    <LuLayoutGrid className=''/>
                  </div>
                  <div className="p-[9px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-white">
                    <AiOutlineBars className=''/>
                  </div>
                </Flex>
                <Flex className="gap-x-[40px] mt-[15px]">
                  <Flex className="gap-x-[14px]">
                    <Heading className="font-DM font-regular text-[#767676] text-[16px] mt-[5px]" text="Sort by:" as="h4"/>
                    <Flex className=" w-[239px] h-[36px] border-2 border-[#F0F0F0] justify-between py-[3px] px-[21px]">
                      <Heading className="font-DM font-regular text-[#767676] text-[16px]" text="Featured" as="h4"/>
                      <PiControlFill className='mt-[10px]'/>
                    </Flex>
                  </Flex>
                  <Flex className="gap-x-[14px]">
                    <Heading className="font-DM font-regular text-[#767676] text-[16px] mt-[5px]" text="Show:" as="h4"/>
                    <Flex className=" w-[239px] h-[36px] border-2 py-[3px] px-[21px] border-[#F0F0F0]  justify-between">
                      <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="36" as="h4"/>
                      <PiControlFill className='mt-[10px]'/>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="mt-[60px] mb-[50px] gap-x-[40px] gap-y-[50px] flex-wrap">
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={pot}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={potOffer}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={headphone}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={headphoneOffer}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={table}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={cap}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={clock3}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={clock3Offer}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={bag2}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={sunglass}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={sunglassOff}er/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={table}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={tableOffer}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={cap}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={capOffer}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={vasket}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={Clock1}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
                <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] mb-[16px] " src={sunglass}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
                </div>
              </Flex>
               <Flex className="align-middle justify-between">
                <Flex className="gap-x-[15px]">
                 <Heading className="py-[6px] px-[15px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFF] font-DM text-[#767676] text-[14px] font-regular" text="1" as="h4"/>
                 <Heading className="py-[6px] px-[15px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFF] font-DM text-[#767676] text-[14px] font-regular" text="2" as="h4"/>
                 <Heading className="py-[6px] px-[15px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFF] font-DM text-[#767676] text-[14px] font-regular" text="3" as="h4"/>
                 <Heading className="py-[6px] px-[15px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFF] font-DM text-[#767676] text-[14px] font-regular" text="4" as="h4"/>
                 <BsThreeDots className='mt-[13px] font-DM text-[#767676] text-[14px] font-regular'/>
                 <Heading className="py-[4px] px-[12px] border-2 border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFF] font-DM text-[#767676] text-[14px] font-regular" text="10" as="h4"/>
                </Flex>
                <Heading className="font-DM font-regular text-[#767676] text-[14px]" text="Products from 1 to 12 of 80" as="h4"/>
               </Flex>
           </div>
           </Flex>
        </Container>
    </section>
  )
}

export default Product
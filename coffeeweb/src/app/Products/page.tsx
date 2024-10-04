import Image from 'next/image';
import card1 from "../Assests/card1.jpg"
import card2 from "../Assests/card2.jpg"
import card3 from "../Assests/card3.jpg"
import card4 from "../Assests/card4.jpg"
import card5 from "../Assests/card5.jpg"
import card6 from "../Assests/card6.jpg"
import card7 from "../Assests/card7.jpg"
import card8 from "../Assests/card8.jpg"
const Page = () => {
    return (
        <div>
             <div className="h-auto w-full flex flex-wrap flex-col items-center text-center ">
                {/* Heading */}
                {/* card1 */}
                 <div className="h-auto w-full flex flex-wrap flex-col items-center bg-amber-800"> 
                     <p className=" mt-20 font-bold text-2xl md:text-3xl text-center">"Our Products"</p>
                       <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
                         <div className="w-[90%] h-auto flex flex-wrap justify-around">
                         <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="w-64 h-58" src={card1} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>French Vanilla </div>
                         <p className="text-xl font-bold text-black">French vanilla is a classic <br /> coffee flavor  that offers <br />a subtle and pleasing . <br /> Its aromatic touch enhances <br /> decaf blends and standard <br /> beverages packed <br /> with morning fuel. 
                         </p>
                     </div>
                     
                 {/* card2 */}
                 <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="w-64 h-40" src={card2} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>Caramel</div>
                         <p className="text-xl font-bold text-black">The candied and toasty palate of caramel complements any cup of coffee as an alternative to adding a spoonful of sugar. This flavor is gaining momentum because it offers a sweetness you can savor
                         .</p>  
                     </div>
                 
                 {/* card3 */}
                 <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="w-64 h-40" src={card3} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>Hazelnut </div>
                         <p className="text-xl font-bold text-black">Considered a good choice almost anywhere, hazelnut flavoring provides a sweet and buttery taste. It emits a nutty aroma in freshly brewed batches. </p>
                     </div>

                    
                 {/* card4 */}
                         <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="w-64 h-40" src={card4} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'> Peppermint</div>
                         <p className="text-xl font-bold text-black">Peppermint is becoming more common for brands because of its notable and refreshing taste. The minty fragrance works well in hot drinks as a seasonal delight in winter. </p>
                     </div>
                    
                 {/* card5 */}
                 <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="w-64 h-40" src={card5} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>Mocha </div>
                         <p className="text-xl font-bold text-black"> You cant go wrong with mocha, which is the perfect mix of richness and sweetness. It blends well with milk, chocolate, and coffee.
                         </p>
                     </div>
                    
                 {/* card6 */}
                 <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="w-64 h-40" src={card6} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>Amaretto </div>
                         <p className="text-xl font-bold text-black">When you want the flavoring of an Italian liqueur without the alcohol, consider amaretto. The nutty aroma and taste of toasted almonds offer a sophisticated flair to many hot coffees. </p>
                     </div>
                    
                 {/* card7 */}
                 <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="" src={card7} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>Black Coffie</div>
                         <p className="text-xl font-bold text-black">Black coffee is simply coffee that is normally brewed without the addition of additives such as sugar, milk, cream, or added flavors. many people love a strong cup of black coffee.</p>
                     </div>
                    
                 {/* card8 */}
                 <div className="w-64 flex flex-col items-center mb-12 bg-amber-600  rounded-xl p-2">
                         <Image className="" src={card8} alt=''></Image>
                         <div className='text-2xl text-white font-mono mt-4'>Long Black.
                         </div>
                         <p className="text-xl font-bold text-black">Moderate consumption of black coffee has been linked to a lower risk of heart disease and stroke. The antioxidants in coffee may help ...Black coffee is low in calories and can boost the metabolic rate, aiding in fat burning.</p>
                       </div>           
                    </div>  
              </div>
         </div>
     </div>
    );
}

export default Page;

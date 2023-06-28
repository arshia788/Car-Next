import { useRouter } from "next/router";
import Back from '../icons/Back';
import Card from '../module/Card';


const Carlist = ({data}) => {

    const back= useRouter();
    const backHandler=()=>{
        back.back()
    }

    return (
        <div>
            <div onClick={backHandler}
            className="flex items-center 
            gap-x-1 cursor-pointer mb-8"
            >
                <Back />
                <p>Back</p>
            </div>


            <div className="grid grid-cols-12">
                {
                    data.map(item=>{
                        return(
                            <div 
                            className="xs:col-span-12 md:col-span-6
                            lg:col-span-3
                            "
                            key={item.id}>
                                <Card {...item}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Carlist;
import Card from "../module/Card";

const CarsPage = ({ data }) => {
    return (
        <div className="grid grid-cols-12 w-full h-full">
            {
                data.map(item =>
                    // ! be aware that the div should be inside the loop
                    <div 
                    key={item.id}
                    className="
                    xs:col-span-12 
                    md:col-span-6 
                    lg:col-span-4
                    mt-4
                    ">
                        <Card  {...item} />
                    </div>
                )
            }
        </div>
    );
};

export default CarsPage;
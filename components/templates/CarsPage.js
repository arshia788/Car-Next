import Card from "../module/Card";

const CarsPage = ({ data }) => {
    return (
        <div className="grid grid-cols-12 w-full h-full">
            {
                data.map(item =>
                    // ! be aware that the div should be inside the loop
                    <div className="
                    xs:col-span-12 
                    md:col-span-6 
                    lg:col-span-4
                    m-1
                    ">
                        <Card key={item.id} {...item} />
                    </div>
                )
            }
        </div>
    );
};

export default CarsPage;
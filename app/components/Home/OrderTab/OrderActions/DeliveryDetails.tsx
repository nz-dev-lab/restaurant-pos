

const DeliveryDetails: React.FC =()=> {
    return(
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <input type="text" placeholder="Customer Name" className="w-[40%] h-[32px] border p-2 rounded text-sm" />
                <input type="tel" placeholder="Customer Mobile" className="w-[40%] h-[32px] border p-2 rounded text-sm" />
            </div>
            <input type="text" placeholder="Address" className="w-full border p-2 rounded text-sm" />
        </div>
    )
}

export default DeliveryDetails;
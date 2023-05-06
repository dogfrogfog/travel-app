import { Input } from '../components/ui/input'  // fix path

export default function Filters() {
    return (
        <div className="bg-green-300 mb-12 p-2 rounded flex">
            <Input placeholder='filter' className='bg-white w-1/3 m-2' />
            <Input placeholder='filter' className='bg-white w-1/3 m-2' />
            <Input placeholder='filter' className='bg-white w-1/3 m-2' />
        </div>
    )
}
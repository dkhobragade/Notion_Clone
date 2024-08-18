import Image from "next/image"
import Img1 from '../../../public/documents.png'
import Img11 from '../../../public/documents-dark.png'
import Img2 from '../../../public/reading.png'
import Img22 from '../../../public/reading-dark.png'

const Heros = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h=[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image src={Img1} alt="Documents" fill className="object-contain dark:hidden" />
                    <Image src={Img11} alt="Documents" fill className="hidden dark:block" />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image src={Img2} alt="Reading" fill className="object-contain dark:hidden" />
                    <Image src={Img22} alt="Reading" fill className="hidden dark:block" />
                </div>
            </div>
        </div>
    )
}

export default Heros
import "./style.css"
import Image from "next/image"
import imageTest from "./Public/img.jpg"
export default function Page() {
  return (
  <>
  <h1>
    Hello, Dashboard Page!
  </h1>
  <img src="https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg" layout="intrinsic" width={730} height={500} />
  <Image src={imageTest} layout="responsive" width={730} height={500} />  {/*100% holatda responsive qiladi */}
  <Image src={imageTest} layout="intrinsic" width={730} height={500} />    {/* malum belgilanga width da va height da boladi va oshmaydi*/}
  </>
  )
}

import { useControls } from "leva"

import Default from "./Default"
import Svg from "./Svg"


const IMAGES = Object.freeze({
    Default: "Default",
    Svg: "Svg"
})

const Image = () => {
    const { useImages } = useControls("Components", {
        useImages: {
            label: "Image",
            options: IMAGES,
            value: IMAGES.Default
        }
    })

    function enableImages(name) {
        return useImages === name
    }

    return (
        <>
            {enableImages(IMAGES.Default) && <Default />}
            {enableImages(IMAGES.Svg) && <Svg />}
        </>
    )

}

export default Image
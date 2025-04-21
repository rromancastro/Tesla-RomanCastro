"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ProductPageImage = ({images}) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [view, setView] = useState("noViewButtons");
    const [opacityImage, setOpacityImage] = useState("imageOpacity1");

    const handleNextImage = () => {
        if (currentImage < images.length - 1) {
            setOpacityImage("imageOpacity0");
            setTimeout(() => {
                setCurrentImage(currentImage + 1);
                setOpacityImage("imageOpacity1");
            }, 500);
        } else {
            setOpacityImage("imageOpacity0");
            setTimeout(() => {
                setCurrentImage(0);
                setOpacityImage("imageOpacity1");
            }, 500);
        }
    }

    const handlePrevImage = () => {
        if (currentImage > 0) {
            setOpacityImage("imageOpacity0");
            setTimeout(() => {
                setCurrentImage(currentImage - 1);
                setOpacityImage("imageOpacity1");
            }, 500);
        } else {
            setOpacityImage("imageOpacity0");
            setTimeout(() => {
                setCurrentImage(images.length - 1);
                setOpacityImage("imageOpacity1");
            }, 500);
        }
    }

    return (
        <div id="productPageImages">
            <button onClick={handlePrevImage} onMouseOver={() => setView("viewButtons")} className={view} id="productPageImagesButtonPrev"><IoIosArrowBack /></button>
            <Image onMouseLeave={() => setView("noViewButtons")} onMouseOver={() => setView("viewButtons")} src={images[currentImage]} alt={images[currentImage]} width={1920} height={1080} className={`productPageImagesImage ${opacityImage}`}/>
            <button onClick={handleNextImage} onMouseOver={() => setView("viewButtons")} className={view} id="productPageImagesButtonNext"><IoIosArrowForward /></button>
        </div>
    )
}
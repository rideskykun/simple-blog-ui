import React, {FC, useEffect, useRef, useState} from "react";
import RecommendedPost from "./recommended-post";
import useReadingProgress from "../../hooks/useReadingProgress";

const Post:FC = () => {
    const readingProgress:Number = useReadingProgress();

    const [sections, setSections] = useState([1,2,3,4,5])
    const sectionRefs = useRef([])

    useEffect(()=>{
        sectionRefs.current = sectionRefs.current.slice(0, sections.length);
    },[sections])

    return(
        <div className={'border-r border-l border-black min-h-screen'}>
            {/*Progress Bar*/}
            <div className={'w-full bg-gray-100 h-4 border-b border-black z-40 top-12 sticky'}>
                <div className={'h-4 bg-black transition'} style={{width:`${readingProgress}%`}}></div>
            </div>
            <div className={'border-black border-b'}>
                <h1 className={'text-2xl p-3 font-bold'}>long article post title</h1>
                <img
                    src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className={'w-full h-96 object-cover bg-white hover:opacity-80 transition border-b border-t border-black '}
                />
                <p className={'px-3 py-3 bg-black text-white w-56'}>October 12, 2022</p>

                <div className={'flex px-4 md:pr-4 md:pl-0 py-8'}>
                    <div className={'sticky top-1/4 basis-1/5 hidden md:block border-black border border-l-0 h-full mr-3'}>
                        <p className={'font-bold p-3'}>Table of Contents</p>
                        {sections.map(s => (
                            <button
                                key={s}
                                className={'w-full text-left bg-gray-200 px-3 py-1 border-t border-black hover:bg-gray-300 active:bg-gray-400'}
                            >
                                Section {s}
                            </button>
                        ))}
                    </div>
                    <div className={'md:basis-4/5'}>
                        {sections.map(section => (
                            <section key={section}>
                                <h6 className={'text-lg mb-3 font-medium'}>Section {section}</h6>
                                <p className={'whitespace-pre-wrap'}>
                                    {lorem}
                                </p>
                            </section>
                        ))}
                    </div>
                </div>

            </div>
            <div className={''}>
                <p className={'px-3 py-3 bg-black text-white w-32'}>read next:</p>
                <div className={'grid grid-cols-2 md:grid-cols-4 gap-2 bg-black'}>
                    <RecommendedPost/>
                    <RecommendedPost/>
                    <RecommendedPost/>
                    <RecommendedPost/>
                </div>
            </div>
        </div>
    )
}

export default Post

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mauris vitae erat posuere lobortis. Donec non risus tincidunt, rutrum turpis sit amet, posuere lectus. Morbi sit amet neque leo. Mauris aliquam nisl eleifend sem lacinia, quis consectetur justo condimentum. Etiam id pellentesque ante, sit amet semper eros. Aliquam eget suscipit justo. Vivamus purus erat, ultrices quis aliquet nec, dapibus ut dolor. Duis et bibendum risus, non ultrices nulla. Ut placerat metus odio, nec dignissim lorem vulputate quis. Phasellus tempor eu ex eget tincidunt. Curabitur eget egestas massa.\n' +
    '\n' +
    'Suspendisse id velit ac eros vulputate egestas. Phasellus odio diam, efficitur vitae nisi eget, cursus dictum neque. Etiam pellentesque, tortor eu efficitur congue, augue quam eleifend eros, nec rutrum mi felis sed metus. Cras tempor odio nunc, nec imperdiet lacus finibus ut. Suspendisse et feugiat tortor, eu eleifend dolor. Nulla pellentesque nulla eget velit malesuada, ac iaculis velit sodales. Curabitur felis arcu, hendrerit vitae eleifend vitae, vehicula at lorem. Nam cursus, enim id tristique egestas, elit leo accumsan mauris, eu vestibulum metus erat a neque.\n' +
    '\n' +
    'Nullam tristique ligula metus, at tincidunt sem porttitor nec. Suspendisse potenti. Cras mattis dolor eu hendrerit imperdiet. Integer consectetur sit amet dolor a vehicula. Integer facilisis enim nec iaculis pharetra. Vestibulum id ipsum ac tortor lacinia hendrerit vel nec nulla. Ut felis ligula, dignissim ut mauris a, posuere dapibus est. Praesent pulvinar posuere nibh, eu finibus urna scelerisque vel. Maecenas in enim blandit, iaculis nibh ac, posuere sapien. Donec turpis tortor, laoreet quis ipsum a, venenatis pharetra odio. Donec sit amet massa sed sapien hendrerit lobortis eu ut enim. In hac habitasse platea dictumst. Aenean risus leo, tempus non metus nec, egestas vulputate est. Aliquam varius suscipit imperdiet. Cras vel condimentum lectus. Cras ullamcorper sem sem, a venenatis tortor accumsan vitae.\n' +
    '\n' +
    'Donec maximus aliquam condimentum. Nam aliquam, massa eu porttitor finibus, nunc lectus viverra felis, quis consectetur risus risus eget nulla. Sed feugiat dolor euismod magna sollicitudin, in pellentesque ante porttitor. Sed vel vulputate neque. Morbi sit amet libero vitae mauris condimentum vehicula. Aenean egestas, nisi sed lobortis fermentum, nisi arcu varius metus, sed cursus neque dui nec neque. Curabitur dictum, neque id facilisis dapibus, ipsum dolor cursus nunc, sed pellentesque eros ante eget nunc. Donec lacinia est ligula, a feugiat nibh rhoncus ut. Vivamus pharetra elit sit amet purus mattis, at elementum arcu viverra. Maecenas nisi metus, auctor vitae magna id, pulvinar bibendum quam. Donec sit amet fringilla justo. Phasellus vel dignissim sapien, eu congue tellus. Aliquam vitae pharetra odio. Etiam ipsum nulla, feugiat quis ornare non, iaculis sit amet quam. Vivamus id mattis orci, non tristique libero. Etiam ut purus vitae sem pretium finibus.\n' +
    '\n' +
    'In interdum, orci at placerat aliquam, lorem tellus lacinia mi, et scelerisque libero enim eget libero. Etiam turpis leo, finibus et lectus at, sollicitudin pharetra lectus. Proin convallis elit erat, a scelerisque nunc vestibulum bibendum. Duis lacus ante, consequat id rhoncus et, venenatis vel nunc. Nam blandit gravida velit sagittis tincidunt. Proin maximus venenatis lorem, ac pharetra ex varius eget. Curabitur erat mi, consectetur et libero at, consequat eleifend erat. Ut sit amet volutpat lectus. Phasellus facilisis mauris sodales aliquet blandit. Cras ornare, dolor vel accumsan consectetur, leo est volutpat libero, quis sagittis arcu tortor in nibh. In hac habitasse platea dictumst. Nam vulputate neque at pretium gravida. Aenean consectetur in justo at varius. Nam quam tortor, sollicitudin non lobortis quis, mollis et lorem. Ut ut pretium ipsum.\n' +
    '\n';
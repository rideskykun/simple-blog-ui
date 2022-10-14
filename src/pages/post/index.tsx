import React, {FC} from "react";
import RecommendedPost from "./recommended-post";
import useReadingProgress from "../../hooks/useReadingProgress";

const Post:FC = () => {
    const readingProgress:Number = useReadingProgress();

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
                <p className={'px-3 py-3 bg-black text-white w-52'}>October 12, 2022</p>
                <p className={'whitespace-pre-wrap px-4 py-8'}>
                    {lorem}
                </p>
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
    '\n' +
    'Integer imperdiet eros ac nisl interdum, in commodo est ullamcorper. Vestibulum ac pharetra tellus. Suspendisse eu neque elit. Morbi sed magna et velit pellentesque euismod. Pellentesque eget ante porta, volutpat lacus nec, sollicitudin ante. Donec eu volutpat ipsum. Phasellus iaculis tortor ut neque lacinia, hendrerit suscipit ligula euismod. Cras porta nunc id nibh pellentesque fermentum. Pellentesque dictum imperdiet tortor non facilisis. Integer scelerisque blandit pellentesque. Suspendisse sollicitudin nunc laoreet elit imperdiet, vel luctus sem eleifend. Maecenas massa dui, laoreet ac tempus at, lacinia eu ipsum. Duis ac augue eu turpis viverra posuere ac at lacus. Aliquam quis felis efficitur urna elementum viverra quis vel mi. Mauris commodo metus eu diam venenatis tempus. Suspendisse iaculis est ac sapien porta, ut viverra ligula iaculis.\n' +
    '\n' +
    'Integer a ipsum a quam luctus cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eu sollicitudin lectus. In auctor mattis ex, ut ultricies lacus rhoncus sagittis. Vivamus diam eros, tempus vel mi sed, faucibus eleifend nulla. Cras dapibus, nulla sed facilisis rutrum, est dolor malesuada sem, vitae imperdiet tortor metus ac eros. Nam in consectetur massa. Etiam vestibulum dictum orci, nec egestas mi lobortis non. Proin porta rutrum augue non aliquet. Nam risus metus, venenatis a nisl nec, sollicitudin tincidunt turpis. Aenean ultricies mauris sit amet mauris bibendum, vel lobortis dui molestie. Mauris nec dui et eros porta venenatis eget sed risus. Nulla a dapibus massa, euismod dictum diam.\n' +
    '\n' +
    'Nunc lacus metus, volutpat nec tempor a, ullamcorper in nisi. Quisque eu rutrum tortor. Maecenas iaculis odio ac massa vestibulum dapibus. Etiam pretium, tortor a posuere hendrerit, ipsum mi mattis purus, nec faucibus augue eros sollicitudin turpis. Suspendisse ut eros eu justo scelerisque sollicitudin. Sed feugiat maximus ipsum at dictum. Proin at magna risus. Donec et finibus dolor, in cursus nulla. Mauris aliquet dolor libero, in auctor magna hendrerit et. Nunc tristique, lacus malesuada fringilla commodo, tortor lorem vestibulum leo, non ultrices eros diam non orci. Integer sapien turpis, maximus nec libero in, ullamcorper sodales erat. In cursus vel ante eu dignissim. Vivamus turpis orci, hendrerit non turpis vitae, tempor elementum leo. Sed porttitor efficitur ullamcorper. Donec vehicula leo non urna venenatis, eget consequat neque mollis.\n' +
    '\n' +
    'Aliquam vel pretium ante. Ut quis lorem in ex ultricies congue non sed tellus. Cras quis orci et risus finibus auctor non at leo. Aliquam erat volutpat. Quisque tempus ut erat vitae suscipit. Donec interdum urna ut turpis interdum fermentum. Aenean eget cursus justo, sed molestie ex. Duis egestas fringilla tellus at eleifend. Vivamus ac condimentum nunc. Nulla laoreet mi maximus rhoncus imperdiet. Phasellus nibh arcu, efficitur eget rutrum pharetra, aliquam bibendum odio. Vestibulum iaculis, ex quis pretium vehicula, nulla leo pretium ex, eu vehicula sapien erat at elit. Nulla tempus quis neque pretium facilisis. Curabitur accumsan dolor ultrices accumsan pulvinar. Ut gravida felis et ligula imperdiet, at placerat elit fermentum. Pellentesque non orci consectetur, consectetur elit vel, vehicula nisl.\n' +
    '\n' +
    'Curabitur vitae urna et odio accumsan consequat. Nullam accumsan faucibus augue sed feugiat. Vestibulum sapien dolor, porta vel feugiat quis, consectetur a sapien. Duis turpis erat, condimentum ac tellus vel, pretium aliquet nisi. Aliquam imperdiet lacus a tellus finibus, at eleifend urna porttitor. Nam eu placerat urna. Aliquam sed dignissim neque, et euismod velit. Curabitur laoreet felis ac erat mattis venenatis. Suspendisse cursus dictum neque eu ultricies. Sed aliquam vel enim ut vehicula. Proin semper lorem sed metus bibendum pellentesque.\n' +
    '\n'
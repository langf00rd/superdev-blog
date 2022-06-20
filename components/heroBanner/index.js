import { textStyles } from "../styles/text.styles"
import Image from "next/image"
import twitter from '../../public/assets/svg/twitter.svg'
import github from '../../public/assets/svg/github.svg'
import linkedin from '../../public/assets/svg/linkedin.svg'
import instagram from '../../public/assets/svg/instagram.svg'
import Link from "next/link"

const HeroBanner = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <div className='max-w-3xl'>
                        <h1 className={textStyles.pageTitle}>Become a <span className="gradient">Super Dev</span></h1>
                        <p className='mt-5 leading-[30px]'>
                            Hello there 👋.I&apos; m Langford, a full-stack web and software developer. I&apos; m also a Technical Writer and Content Creator ✍️. And I&apos;m here to help you grow from web developer to a <span className="gradient">Super dev</span>
                        </p>
                        <div className='flex items-center w-full max-w-[170px] justify-between mt-5 opacity-50'>
                            <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                                <div className="cursor-pointer">
                                    <Image src={github} alt='github' />
                                </div>
                            </Link>

                            <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                                <div className="cursor-pointer">
                                    <Image src={twitter} alt='twitter' />
                                </div>
                            </Link>

                            <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                                <div className="cursor-pointer">
                                    <Image src={linkedin} alt='linkedin' />
                                </div>
                            </Link>

                            <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                                <div className="cursor-pointer">
                                    <Image src={instagram} alt='instagram' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    main: `big-home-text-container py-10 lg:py-20 border-b border-b-borderGray w-screen mt-[50px]`,
    wrapper: `max-w-7xl m-auto px-5 pt-5`,
}

export default HeroBanner
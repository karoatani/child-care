import React from 'react'

const Contact = () => {
    return (
        <form action="" className=' bg-[#F6F6F6] p-10'>
            <div className='flex flex-col items-center gap-10 '>
                <div className='flex flex-col items-center'>
                    <h2 className='text-2xl'>Get Started Today!</h2>
                </div>
                <div>
                    <div className='mb-5'>
                        <label htmlFor="name">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Name</span> *</p>
                        </label>
                        <input type="text" id="name" name="name" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 placeholder:text-[#CFCFCF]' placeholder='Your full name' />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="name">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>What is your relationship to the child? *</span> *</p>
                        </label>
                        <input type="text" id="name" name="name" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 placeholder:text-[#CFCFCF]' placeholder='Parent, Guardian, Caretaker' />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="name">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Phone number</span> *</p>
                        </label>
                        <input type="text" id="name" name="name" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="name">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Email</span> *</p>
                        </label>
                        <input type="text" id="name" name="name" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' />
                    </div>

                    <div className='mb-5'>
                        <h2>Preferred Method of Contact</h2>
                        <div>
                            <input type="radio" id="phone_call" name="contact_method" value="phone_call" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                            <label htmlFor="phone_call">Phone Call</label>
                        </div>
                        <div>
                            <input type="radio" id="email" name="contact_method" value="email" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <input type="radio" id="text_message" name="contact_method" value="text_message" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                            <label htmlFor="text_message">Text Message</label>
                        </div>
                        <div>
                            <input type="radio" id="whatsapp" name="contact_method" value="whatsapp" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                            <label htmlFor="whatsapp">WhatsApp</label>
                        </div>
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="street_address">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Address</span> *</p>
                        </label>
                        <input type="text" id="street_address" name="street_address" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='Street Address' />
                    </div>
                    <div className='mb-5'>

                        <input type="text" id="address_line_2" name="address_line_2" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='Address Line 2' />
                    </div>

                    <div className='mb-5'>

                        <input type="text" id="city" name="city" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='City' />
                    </div>

                    <div className='mb-5'>

                        <input type="text" id="state" name="state" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='State' />
                    </div>

                    <div className='mb-5'>

                        <input type="text" id="postal_code" name="postal_code" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='Postal Code' />
                    </div>

                    <div className='mb-5'>

                        <input type="text" id="country" name="country" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='Country' />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="child_name">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Child’s Name</span> *</p>
                        </label>
                        <input type="text" id="child_name" name="child_name" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' />
                    </div>


                    <div className='mb-5'>
                        <h2>Child’s Sex</h2>
                        <div className='flex gap-5'>
                            <div>
                                <input type="radio" id="male" name="gender" value="male" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="female" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                                <label htmlFor="female">Female</label>
                            </div>

                        </div>
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="child_date_of_birth">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Child’s Date of Birth</span> *</p>
                        </label>
                        <input type="text" id="child_date_of_birth" name="child_date_of_birth" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='(MM/DD/YYYY)' />
                    </div>

                    <div className='mb-5'>
                        <h2>Does your child have autism diagnostics?<span className='text-red-700'> *</span></h2>
                        <div className='flex gap-5'>
                            <div>
                                <input type="radio" id="yes" name="diagnostics" value="yes" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div>
                                <input type="radio" id="no" name="diagnostics" value="no" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                                <label htmlFor="no">No</label>
                            </div>

                        </div>
                    </div>

                    <div className='mb-5'>
                        <h2>Is your child in need of an autism assessment?<span className='text-red-700'> *</span></h2>
                        <div className='flex gap-5'>
                            <div>
                                <input type="radio" id="yes" name="assessment" value="yes" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div>
                                <input type="radio" id="no" name="diagnostics" value="no" className='mr-2 text-[#8F36FF] accent-[#8F36FF] rounded-full' />
                                <label htmlFor="no">No</label>
                            </div>

                        </div>
                    </div>

                    <div className='mb-5' >
                        <label htmlFor="diagnosis">
                            <p className='text-red-700 mb-2'>
                                <span className='text-black'>Does your child have a diagnosis other than autism? If so, please specify:</span> *</p>
                        </label>
                        <input type="text" id="diagnosis" name="diagnosis" className='w-[756px] h-[50px] border-2 border-[#BBBBBB] outline-none p-2 ' placeholder='Specify Details' />
                    </div>

                </div>
            </div>
        </form>)
}

export default Contact
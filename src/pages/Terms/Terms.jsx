import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Terms = () => {
    return (
        <><h2 className='text-center fw-bold bottom-border shadow my-4 py-4'>Terms And Condition</h2>
            <Container>
                <div className='mt-5 p-4'>
                    <h5>Here is a sample terms and conditions document for a food blogging website:</h5>

                    Welcome to <Link to="/">The Chefs Cafe</Link>, a website dedicated to food blogging. By accessing or using the Site, you agree to be bound by these terms and conditions (“Terms”) as well as any additional terms and conditions posted on the Site. If you do not agree to these Terms, you may not use the Site.

                    <h5>1. Content</h5>

                    All content on the Site, including but not limited to text, images, videos, and recipes (“Content”), is the property of the Site or its contributors and is protected by copyright laws. You may not use any Content for commercial purposes without express permission from the Site or its contributors.

                    <h5>2. User Conduct</h5>

                    As a user of the Site, you agree to use the Site in a manner consistent with all applicable laws and regulations. You may not use the Site to post or transmit any material that is obscene, defamatory, or infringing on any intellectual property rights. You may not use the Site to advertise any products or services without express permission from the Site.

                    <h5>3. Registration</h5>

                    Certain areas of the Site may require registration in order to access. By registering for the Site, you agree to provide accurate and current information about yourself, and to update this information as necessary. You are responsible for maintaining the confidentiality of your account information and password, and for all activities that occur under your account.

                    <h5>4. User-Submitted Content</h5>

                    Users may submit content to the Site, including recipes, reviews, and comments (“User Content”). By submitting User Content, you represent and warrant that you have all necessary rights and permissions to post the content, and that it does not infringe on any third-party rights. The Site reserves the right to remove any User Content that it deems inappropriate or offensive.

                    <h5>5. Disclaimer of Warranties</h5>

                    The Site makes no warranties or representations about the accuracy or completeness of the Content on the Site, and assumes no liability for any errors or omissions. The Site is not responsible for any damages resulting from the use or inability to use the Site, including but not limited to direct, indirect, incidental, or consequential damages.

                    <h5>6. Indemnification</h5>

                    You agree to indemnify and hold harmless the Site and its contributors from any and all claims, liabilities, damages, and expenses (including attorneys’ fees) arising from your use of the Site or any violation of these Terms.

                    <h5>7. Modification</h5>

                    The Site reserves the right to modify these Terms at any time, without notice. It is your responsibility to review these Terms periodically to ensure that you are aware of any changes. Your continued use of the Site after any modifications indicates your acceptance of the modified Terms.

                    <h5>8. Governing Law</h5>

                    These Terms and any disputes arising out of or related to the Site shall be governed by and construed in accordance with the laws of the jurisdiction where the Site is based, without giving effect to any principles of conflicts of law.

                    <p>By accessing or using the Site, you agree to these Terms and the Site’s Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms or the Privacy Policy, you may not use the Site.</p>
                    <p className="text-center fw-bold m-4"><small>New to this website? Please <Link to="/register">Register</Link> </small></p> <p className='text-center'>OR</p>
                    <p className="text-center fw-bold"><small>Already Have an Account? Please <Link to="/emaillogin">Login</Link> </small></p>
                </div>
            </Container>
        </>
    );
};

export default Terms;
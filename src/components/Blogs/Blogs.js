import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div>
                <h2>Difference between Javascript and NodeJs</h2>
                <table>
                    <tr>
                        <th>Javascript</th>
                        <th>NodeJs</th>
                    </tr>
                    <tr>
                        <td>Javascript is a high-level programming language which is used for writing script in the website.</td>
                        <td>NodeJs is a cross-platform and javascript runtime environment.</td>
                    </tr>
                    <tr>
                        <td>Javascript can only run on the browser.</td>
                        <td>With the help of NodeJs javascript can run outside of the browser.</td>
                    </tr>
                    <tr>
                        <td>Javascript basically used on the client-side.</td>
                        <td>NodeJs is mostly used on the server-side application.</td>
                    </tr>
                    <tr>
                        <td>Javascript is capable to add HTML and play with DOM.</td>
                        <td>NodeJs does not have capability of adding HTML tags.</td>
                    </tr>
                    <tr>
                        <td>Javascript upgrade version of ECMA script uses chrome V8 engine written in C++.</td>
                        <td>NodeJs is written in C, C++ and Javascript.</td>
                    </tr>
                </table>
            </div>
            <div className='mt-3 row'>
                <div className='col-md-6'>
                    <h2>When should you use NodeJs?</h2>
                    <p>
                        I should use NodeJs when I know:
                        <ul>
                            <li>Easier development process.</li>
                            <li>Reusable code.</li>
                            <li>Handle multiple code execution.</li>
                            <li>To scale smoothly.</li>
                            <li>Asynchronous.</li>
                            <li>Event-driven.</li>
                        </ul>

                    </p>
                </div>
                <div className='col-md-6'>
                    <h2>When should you use Mongodb?</h2>
                    <p>
                        I should use Mongodb reasons are:
                        <ul>
                            <li>Flexible document schemas that can evolve with time.</li>
                            <li>Higher performance due to the data models.</li>
                            <li>Horizontal scaling.</li>
                            <li>Full cloud-based application data platform.</li>
                            <li>Cost-effective.</li>
                            <li>Powerful querying and analytics.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='mt-3'>
                <h2>Difference between SQL and NoSQL database?</h2>
                <table>
                    <tr>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                    <tr>
                        <td>Relations database management system ins short RDBMS.</td>
                        <td>Non-relations database system.</td>
                    </tr>
                    <tr>
                        <td>Fixed or static predefine schema.</td>
                        <td>Dynamic schema.</td>
                    </tr>
                    <tr>
                        <td>Not suit for hierarchical data storage.</td>
                        <td>Best suit for hierarchical data storage.</td>
                    </tr>
                    <tr>
                        <td>Better performance for complex queries.</td>
                        <td>Not good for complex queries.</td>
                    </tr>
                    <tr>
                        <td>Vertically scalable.</td>
                        <td>Horizontally scalable.</td>
                    </tr>
                </table>
            </div>
            <div className='mt-3 row'>
                <div className='col-md-6'>
                    <h2>What is the purpose of JWT?</h2>
                    <p>
                        In order to have a secure way to authenticate users and share information use JWT. A private key is used by the Issuer to sign the JWT. Mechanism to verify the owner of some JSON data. It's an encoded.
                    </p>
                </div>
                <div className='col-md-6'>
                    <h2>How does JWT work?</h2>
                    <p>
                        Each JWT contains encoded JSON objects. By using cryptographic algorithm to ensure that the claims can not be altered after the token issued. Maintain security between two sides, client side as well as server side.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
# Interactive AR Advertising with Social Media Integration

## Background
The advertising industry is rapidly evolving with the integration of augmented reality (AR), offering immersive experiences that engage consumers in novel ways. However, there is still untapped potential in combining AR with social media to create a more interactive and shareable advertising experience. This project aims to explore this intersection, leveraging the viral nature of social media to enhance the reach and impact of AR advertisements, particularly in the context of e-commerce.

## Objective
To develop a web-based AR application that revolutionizes e-commerce advertising by enabling users to interact with products in a virtual space and share their experiences on social media. This project seeks to create a more engaging and social shopping experience, ultimately driving brand visibility and consumer engagement.

## Technology
- **AR Platform:** AR.js with A-Frame (web-based AR)
- **Modeling Technology:** Blendr or Unity
- **Social Media APIs:** Facebook/Instagram API (considering TikTok or other e-commerce platforms for integration)

## Technical Details
The application will be developed using AR.js and A-Frame for AR functionality, with 3D models created in Unity (may change because it's weird on my computer). Social media integration will be done using the above APIs, allowing for sharing across users and platforms. Depending on progress, I may build a backend based on Node.js and MongoDB, which can manage user data for metrics/analysis.

## Project Development Steps

1. **Research and Select Technologies:**
   - Decide on social media APIs for integration.

2. **Design User Experience:**
   - Design user interface and workflow for web view.
   - Create mockups for AR interface.

3. **Develop 3D Models:**
   - Find or create 3D models for mockup (to finish UI step design).
   - Optimize models for web performance and AR compatibility.

4. **Implement AR Functionality:**
   - Set up AR.js and A-Frame environment.
   - Integrate 3D models into AR scene with interactive features.

5. **Integrate Social Media Sharing:**
   - Implement social media APIs for sharing AR experiences.
   - Add sharing buttons and customize sharing content.

6. **Build Backend Infrastructure (Optional):**
   - Set up backend using Node.js and MongoDB for user data and analytics.
   - Develop endpoints for storing and retrieving user interactions.

7. **Monitor and Analyze with a User Study:**
    - Track user engagement and social sharing metrics.
    - Use insights to refine AR experience and enhance effectiveness.


## User Experience
Users initiate the AR experience by clicking a link. They can then interact with virtual products, exploring features and customization options. After the interaction, users are prompted to share their experience on social media, enhancing brand exposure and engagement. 

## User Study
Depending on the progress of the project, a user study may be conducted to evaluate the effectiveness and user engagement of the AR advertising application. The study will gather feedback on the user experience and the intuitiveness of the interaction (user engagement). Metrics such as time spent in the AR experience, number of interactions or model view changes, frequency of social shares, and user satisfaction will be analyzed to assess the success of the application and identify areas for improvement.

## Sources/Citations
- Rauschnabel, P. A., & Javornik, A. (2016). Augmented reality marketing: How mobile AR-apps can improve brands through inspiration. In Augmented Reality for Marketing (pp. 219-233). Springer, Cham.
- Javornik, A. (2016). Exploring the Use of Augmented Reality for Brand Experiences. Computers in Human Behavior.
- Sung, E. (2020). The effects of augmented reality mobile app advertising: Viral marketing via shared social experience. Journal of Business Research, 117, 196-206.
- Alamäki, A., Dirin, A., & Suomala, J. (2019). Students' expectations and social media sharing in adopting augmented reality. International Journal of Information and Learning Technology, 36(3), 202-216.

# Part 2: Milestone

## Challenges

### Demo Video
[![Demo Video](http://img.youtube.com/vi/5bS152d1niU/169.jpg
)](https://www.youtube.com/watch?v=5bS152d1niU)


### Markerless Environment Compatibility
Finding a suitable markerless environment for the AR application has been challenging. My current library, `AR.js` seems to have some issue with such markerless augmented scenes. I've explored a few options and encountered some limitations:

- **8th Wall:** Initially, I found 8th Wall, which provides markerless AR solutions. However, the free version only allows usage within an online code editor. To access advanced features like the API key, a subscription to the pro or enterprise version is required, which is too much this early into the project.

- **SparkAR:** I also took a look at SparkAR, but it seemed mostly for creating AR effects for Facebook and Instagram. However, it doesn't seem very comptabile with web integrations, so I decided to look at other solutions.

- **WebXR:** Currently, I am looking at exploring WebXR as an alternative. WebXR is a standard that enables AR and VR experiences on the web without the need for plugins. We're still evaluating its compatibility and features to determine if it's the right choice for our AR application.


I'll continue to update this section as I make progress.

## Next steps

1. **Markerless AR:** Research and implement a markerless AR solution that is compatible with the website. This involves exploring libraries or frameworks like WebXR or similar technologies.

2. **User-Generated 3D Models:** Develop a system that allows users to develop or add their own 3D models to the AR environment. This includes a user interface for uploading, editing, and placing 3D models in the AR space.

3. **Social Media Sharing:** Integrate social media sharing functionality into the AR application. This involves adding buttons or links that allow users to easily share their AR experiences on platforms like Facebook, Instagram, or Twitter.

4. **Feedback and Improvement:** Finally, gather feedback from users and use it to improve the AR application. This involves maintenance such as fixing bugs, adding new features, or making other enhancements based on user input.

Doesn't seem like I have to change the scope of the project yet, however, that may change depending on if I find a compatible markerless AR resource.

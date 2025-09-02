# Clinical Research Site Finder

A comprehensive web application for clinical research site matching and analysis. This tool helps researchers and sponsors find optimal clinical trial sites based on protocol requirements and site capabilities.

## 🚀 Features

### Core Functionality
- **PDF Protocol Upload**: Upload clinical trial protocols and automatically extract structured data
- **Smart Site Matching**: AI-powered site selection based on multiple criteria
- **Interactive Criteria Weights**: Adjustable sliders for fine-tuning site selection priorities
- **Comprehensive Site Analysis**: Detailed site rankings with performance metrics
- **Export Capabilities**: Export results to PDF and Excel formats

### User Interface
- **Modern React.js Frontend**: Responsive design with Tailwind CSS
- **Real-time Validation**: Form validation with immediate feedback
- **Interactive Sliders**: Smart criteria weight adjustment system
- **Toggle Criteria Selection**: Predefined inclusion/exclusion criteria with pill-style selection
- **Multi-view Results**: Table and card views for site rankings

### Data Management
- **Project Organization**: Create and manage multiple research projects
- **Scenario Comparison**: Compare different site selection scenarios
- **Historical Data**: Track enrollment rates and site performance
- **Export Functionality**: Generate reports in multiple formats

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/clinical-research-site-finder.git
   cd clinical-research-site-finder
   ```

2. **Start the local server**:
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

## 🎯 Usage

### Creating a New Scenario

1. **Navigate to Projects**: Click "Create New Project" or select an existing project
2. **Upload Protocol**: Drag and drop your PDF protocol or click to browse
3. **Review Extracted Data**: The system will automatically populate form fields
4. **Adjust Criteria Weights**: Use the interactive sliders to set priorities:
   - Patient Availability
   - Historical Enrollment Rate
   - Start-up Speed
   - PI/Specialty Match
   - Competition Load
5. **Select Inclusion/Exclusion Criteria**: Click on predefined criteria pills to add them
6. **Submit**: Click "Submit & View Results" to generate site rankings

### Viewing Results

- **Table View**: Detailed site information in sortable columns
- **Card View**: Visual site cards with key metrics
- **Export Options**: Download results as PDF or Excel
- **Site Comparison**: Select multiple sites for detailed comparison

## 📊 API Specification

The application includes a comprehensive OpenAPI 3.0.3 specification (`api-spec.yaml`) for the PDF upload endpoint:

### Endpoint: `/protocols/upload`
- **Method**: POST
- **Content-Type**: multipart/form-data
- **Authentication**: JWT Bearer Token
- **Response**: Structured clinical trial data

### Key Features:
- **File Validation**: PDF format, 50MB max size
- **Comprehensive Error Handling**: Detailed error responses for all scenarios
- **Structured Data Extraction**: Extracts all relevant protocol information
- **Security**: JWT-based authentication

## 🏗️ Architecture

### Frontend
- **React.js 18**: Modern component-based architecture
- **Tailwind CSS**: Utility-first CSS framework
- **Babel**: JSX transpilation in browser
- **Export Libraries**: html2canvas, jsPDF, xlsx for report generation

### Data Flow
1. **PDF Upload** → **Data Extraction** → **Form Population**
2. **Criteria Adjustment** → **Site Matching Algorithm** → **Results Generation**
3. **Results Display** → **Export Options** → **Report Generation**

### Key Components
- **CreateScenarioPage**: Main form for scenario creation
- **ResultsPage**: Site ranking and analysis display
- **SliderField**: Interactive criteria weight adjustment
- **CustomDropdown**: Reusable dropdown components

## 🎨 UI Components

### Interactive Elements
- **Smart Sliders**: Maintain 100% total while adjusting individual weights
- **Criteria Pills**: Toggle-style selection for inclusion/exclusion criteria
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Export Buttons**: One-click PDF and Excel generation

### Visual Design
- **Modern Interface**: Clean, professional design
- **Color Coding**: Consistent color scheme for different data types
- **Loading States**: Smooth transitions and loading indicators
- **Error Handling**: Clear error messages and validation feedback

## 🔧 Configuration

### Criteria Weights
The system uses five key criteria for site selection:
- **Patient Availability** (0-100%): Site's patient pool size
- **Historical Enrollment Rate** (0-100%): Past performance metrics
- **Start-up Speed** (0-100%): Site activation timeline
- **PI/Specialty Match** (0-100%): Investigator expertise alignment
- **Competition Load** (0-100%): Competing studies at site

### Predefined Criteria
**Inclusion Criteria**:
- Age ranges, diagnosis confirmation, consent ability
- Medical stability, psychiatric screening
- Organ function, pregnancy tests, BMI limits

**Exclusion Criteria**:
- Severe disorders, uncontrolled conditions
- Previous trial participation, drug allergies
- Active malignancy, organ impairment

## 📈 Data Export

### PDF Export
- **Comprehensive Reports**: Full scenario analysis
- **Site Rankings**: Detailed site comparison
- **Professional Formatting**: Ready for stakeholder review

### Excel Export
- **Raw Data**: All site metrics and rankings
- **Multiple Sheets**: Organized data structure
- **Analysis Ready**: Compatible with external tools

## 🚀 Deployment

### Local Development
```bash
python3 -m http.server 8000
```

### Production Deployment
1. Upload files to web server
2. Configure HTTPS
3. Set up domain routing
4. No backend dependencies required

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- **Email**: support@crsfinder.com
- **Documentation**: See API specification for technical details
- **Issues**: Use GitHub issues for bug reports

## 🔮 Future Enhancements

- **Advanced Analytics**: Machine learning for site prediction
- **Integration APIs**: Connect with external clinical trial databases
- **Mobile App**: Native mobile application
- **Real-time Updates**: Live site availability tracking
- **Collaboration Features**: Multi-user project management

---

**Built with ❤️ for the clinical research community**
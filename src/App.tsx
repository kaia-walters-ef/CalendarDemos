import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from "./logo.svg";
import "./App.css";
import ReactCalendar from "./components/ReactCalendar.js/ReactCalendar.tsx";
import ReactBigCalendar from "./components/ReactBigCalendar/ReactBigCalendar";
import FullCalendar from "./components/FullCalendar/FullCalendar";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@eftours/material-ui-gud';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={lightTheme}>
				<CssBaseline enableColorScheme />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<Container component='main' maxWidth='lg'>
					<Stack spacing={8} mt={4}>
						<Typography variant='h3' component='h1'>React Calendar Demos</Typography>
						<ReactCalendar />
						<ReactBigCalendar />
					</Stack>
					{/* <FullCalendar /> */}
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
